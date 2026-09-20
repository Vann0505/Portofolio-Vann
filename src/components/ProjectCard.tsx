import { motion } from "framer-motion";
import { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

// Card untuk satu project. Klik pada card TIDAK langsung membuka GitHub —
// sebaliknya memanggil "onOpen" yang membuka ProjectModal (lihat Projects.tsx).
export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(project)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-base-900/60 text-left focus-visible:outline-none"
      aria-label={`View details for ${project.title}`}
    >
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display text-lg font-semibold text-ink-100">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-ink-400">{project.description}</p>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 px-2 py-1 font-mono text-xs text-accent-cyan"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
}
