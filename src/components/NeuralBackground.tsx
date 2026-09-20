import { useEffect, useRef } from "react";

// ---------------------------------------------------------------------------
// NeuralBackground
// Background animasi tema "neural network": titik-titik (node) yang melayang
// pelan dan terhubung dengan garis tipis saat berdekatan, dipadukan dengan
// aurora glow yang bergerak sangat lambat (lihat kelas "aurora-drift" di
// tailwind.config.js / index.css).
//
// Component ini sengaja diberi "pointer-events: none" (lihat className di
// bawah) supaya tidak pernah menghalangi klik pada navbar / button di atasnya.
// ---------------------------------------------------------------------------

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const NODE_COUNT = 46; // Jumlah titik neural network. Kecilkan jika ingin performa lebih ringan.
const LINK_DISTANCE = 140; // Jarak maksimum (px) antar titik agar garis penghubung muncul.

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let animationId = 0;

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    };

    // Panggil resize() lebih dulu supaya width/height sudah terisi
    // sebelum posisi awal node dihitung di bawah ini.
    resize();

    // Inisialisasi posisi & kecepatan node secara acak, tapi sangat pelan
    // supaya efek terasa "mengambang", bukan ramai/berisik.
    const nodes: Node[] = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Update posisi node + pantulkan arah jika menyentuh tepi canvas.
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      }

      // Gambar garis penghubung antar node yang cukup dekat.
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DISTANCE) {
            const opacity = (1 - dist / LINK_DISTANCE) * 0.18;
            ctx.strokeStyle = `rgba(120, 150, 240, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Gambar titik node itu sendiri (glow lembut).
      for (const node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(160, 180, 255, 0.55)";
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);

    if (prefersReducedMotion) {
      // Jika user meminta reduced motion, gambar sekali saja (statis), tidak looping.
      draw();
      cancelAnimationFrame(animationId);
    } else {
      draw();
    }

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-base-950"
    >
      {/* Layer aurora glow: dua gradient blur yang bergerak sangat pelan */}
      <div className="absolute inset-0 bg-aurora-glow animate-aurora-drift" />
      {/* Layer neural network: digambar dengan canvas untuk performa */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
