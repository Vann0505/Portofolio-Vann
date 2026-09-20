import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";
import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Skills"
          subtitle="Tools and technologies I use to build and ship AI-driven products."
        />

        <div className="space-y-12">
          {skillCategories.map((group) => (
            <div key={group.category}>
              <h3 className="mb-4 font-mono text-sm text-accent-violet">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {group.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
