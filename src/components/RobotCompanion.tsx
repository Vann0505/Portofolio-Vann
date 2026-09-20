import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const MAX_EYE_OFFSET = 4;
const MAX_HEAD_TILT = 6;

function getGreeting(hour: number): string {
  if (hour >= 5 && hour < 12) return "Hii,Good morning! ☀️";
  if (hour >= 12 && hour < 18) return "Hii,Good afternoon! 🌤️";
  return "Hii,Good night! 🌙";
}

export default function RobotCompanion() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [greeting, setGreeting] = useState(() =>
    getGreeting(new Date().getHours())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setGreeting(getGreeting(new Date().getHours()));
    }, 60_000);

    return () => clearInterval(interval);
  }, []);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springX = useSpring(cursorX, {
    stiffness: 120,
    damping: 14,
  });

  const springY = useSpring(cursorY, {
    stiffness: 120,
    damping: 14,
  });

  const eyeX = useTransform(
    springX,
    [-1, 1],
    [-MAX_EYE_OFFSET, MAX_EYE_OFFSET]
  );

  const eyeY = useTransform(
    springY,
    [-1, 1],
    [-MAX_EYE_OFFSET, MAX_EYE_OFFSET]
  );

  const headTilt = useTransform(
    springX,
    [-1, 1],
    [-MAX_HEAD_TILT, MAX_HEAD_TILT]
  );

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const handleMouseMove = (event: MouseEvent) => {
      const element = containerRef.current;

      if (!element) return;

      const rect = element.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const normalizedX =
        (event.clientX - centerX) / (window.innerWidth / 2);

      const normalizedY =
        (event.clientY - centerY) / (window.innerHeight / 2);

      const clampedX = Math.max(-1, Math.min(1, normalizedX));
      const clampedY = Math.max(-1, Math.min(1, normalizedY));

      cursorX.set(clampedX);
      cursorY.set(clampedY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      ref={containerRef}
      className="relative mx-auto w-56 sm:w-64 md:w-72"
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >

      <motion.div
        initial={{
          opacity: 0,
          x: -15,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
          delay: 0.6,
          ease: "easeOut",
        }}
        className="
          absolute
          left-0
          top-8
          z-10
          -translate-x-1/2
          rounded-xl
          rounded-br-sm
          border
          border-white/10
          bg-base-900/90
          px-3
          py-1.5
          text-xs
          font-medium
          text-ink-100
          shadow-lg
          backdrop-blur-sm
          sm:text-sm
          whitespace-nowrap
        "
      >
        {greeting}
      </motion.div>

      <motion.svg
        viewBox="0 0 200 200"
        className="
          h-full
          w-full
          drop-shadow-[0_0_40px_rgba(91,141,239,0.25)]
        "
        style={{
          rotate: headTilt,
        }}
      >

        <line
          x1="100"
          y1="30"
          x2="100"
          y2="14"
          stroke="#5B8DEF"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <circle
          cx="100"
          cy="10"
          r="5"
          fill="#4FD9E8"
        />

        <rect
          x="50"
          y="30"
          width="100"
          height="80"
          rx="24"
          fill="#11142A"
          stroke="#2A2F4A"
          strokeWidth="2"
        />

        <rect
          x="62"
          y="46"
          width="76"
          height="48"
          rx="14"
          fill="#05060B"
        />

        <motion.circle
          cx="85"
          cy="70"
          r="7"
          fill="#4FD9E8"
          style={{
            x: eyeX,
            y: eyeY,
          }}
        />

        <motion.circle
          cx="115"
          cy="70"
          r="7"
          fill="#A78BFA"
          style={{
            x: eyeX,
            y: eyeY,
          }}
        />

        <rect
          x="62"
          y="112"
          width="76"
          height="60"
          rx="18"
          fill="#0D1020"
          stroke="#2A2F4A"
          strokeWidth="2"
        />

        <circle
          cx="100"
          cy="142"
          r="10"
          fill="none"
          stroke="#5B8DEF"
          strokeWidth="2"
        />

        <circle
          cx="100"
          cy="142"
          r="4"
          fill="#5B8DEF"
        />

        <rect
          x="38"
          y="118"
          width="14"
          height="34"
          rx="7"
          fill="#11142A"
          stroke="#2A2F4A"
          strokeWidth="2"
        />

        <rect
          x="148"
          y="118"
          width="14"
          height="34"
          rx="7"
          fill="#11142A"
          stroke="#2A2F4A"
          strokeWidth="2"
        />
      </motion.svg>

      <motion.div
        initial={{
          opacity: 0,
          x: 15,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
          delay: 1,
          ease: "easeOut",
        }}
        className="
          absolute
          -right-20
          top-20
          z-10
          translate-x-1/2
          rounded-xl
          rounded-bl-sm
          border
          border-white/10
          bg-base-900/90
          px-3
          py-1.5
          text-xs
          font-medium
          text-ink-100
          shadow-lg
          backdrop-blur-sm
          sm:text-sm
          whitespace-nowrap
        "
      >
        Have a Nice Day!!! ✨
      </motion.div>
    </motion.div>
  );
}