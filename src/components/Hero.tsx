import { motion } from "framer-motion";
import Button from "./Button";
import RobotCompanion from "./RobotCompanion";
import { profile } from "../data/profile";

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-6 pt-28 pb-16"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
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
            <Button onClick={scrollToProjects} variant="primary">
              View Projects
            </Button>
            <Button href={profile.contact} variant="secondary">
              Contact
            </Button>
          </div>
        </motion.div>

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
