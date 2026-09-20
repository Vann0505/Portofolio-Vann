import SectionTitle from "./SectionTitle";
import { profile } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionTitle title="About Me" />
        <div className="space-y-5">
          {profile.about.map((paragraph, index) => (
            <p key={index} className="text-base sm:text-lg leading-relaxed text-ink-400">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
