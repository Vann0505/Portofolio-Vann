import { useState } from "react";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects, Project } from "../data/projects";

// Section "Featured Projects". Data project diambil dari src/data/projects.ts —
// menambahkan project baru cukup dengan menambah object baru ke array di sana.
export default function Projects() {
  // State ini menyimpan project mana yang sedang dibuka di modal (null = tertutup).
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Featured Projects"
          subtitle="A selection of things I've built while exploring AI, web development, and software engineering."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
