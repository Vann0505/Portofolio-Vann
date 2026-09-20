/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Palet warna kustom untuk tema "dark + neural network + aurora glow".
      // Ganti nilai di sini jika ingin mengubah nuansa warna seluruh website.
      colors: {
        base: {
          950: "#05060B", // background utama
          900: "#0A0D18", // background section / card
        },
        ink: {
          100: "#EAECF5", // teks utama
          400: "#9096AC", // teks sekunder / muted
        },
        accent: {
          blue: "#5B8DEF",
          violet: "#A78BFA",
          cyan: "#4FD9E8",
        },
      },
      fontFamily: {
        // "Sora" untuk heading agar terasa geometris & futuristik.
        display: ["Sora", "sans-serif"],
        // "Inter" untuk body text karena mudah dibaca di ukuran kecil.
        sans: ["Inter", "sans-serif"],
        // Monospace dipakai khusus untuk label teknologi/skill (nuansa "kode").
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "aurora-glow":
          "radial-gradient(60% 50% at 20% 20%, rgba(91,141,239,0.25) 0%, rgba(91,141,239,0) 70%), radial-gradient(50% 40% at 80% 0%, rgba(167,139,250,0.22) 0%, rgba(167,139,250,0) 70%)",
      },
      keyframes: {
        "aurora-drift": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(2%, -3%, 0) scale(1.05)" },
        },
      },
      animation: {
        "aurora-drift": "aurora-drift 18s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
