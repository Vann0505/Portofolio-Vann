import { motion } from "framer-motion";
import Button from "./Button";
import RobotCompanion from "./RobotCompanion";
import { profile } from "../data/profile";

// Section pertama setelah navbar: perkenalan singkat (kiri) + robot
// companion yang mengikuti cursor (kanan). Di mobile, robot pindah ke bawah teks.
export default function Hero() {
  // Bagian ini yang menangani "interaction": klik "View Projects" akan
  // scroll halus ke section #projects.
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-6 pt-28 pb-16"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* LEFT: Teks perkenalan */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-3 text-sm font-medium text-accent-cyan">{profile.role}</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-ink-100">
            Hi, I'm {profile.name}
          </h1>
          <p className="mt-6 max-w-md text-base sm:text-lg leading-relaxed text-ink-400">
            {profile.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {/* CTA "View Projects": scroll ke #projects */}
            <Button onClick={scrollToProjects} variant="primary">
              View Projects
            </Button>
            {/* CTA "Contact": placeholder, ganti profile.contact nanti dengan
                email / LinkedIn / halaman contact */}
            <Button href={profile.contact} variant="secondary">
              Contact
            </Button>
          </div>
        </motion.div>

        {/* RIGHT: Robot yang mengikuti cursor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <RobotCompanion />
        </motion.div>
      </div>
    </section>
  );
}
