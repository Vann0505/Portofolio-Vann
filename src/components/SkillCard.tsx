import { motion } from "framer-motion";
import { Search, MessageSquare } from "lucide-react";
import type { IconType } from "react-icons";

import {
  SiPython,
  SiJavascript,
  SiC,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiTensorflow,
  SiReact,
  SiFastapi,
  SiNodedotjs,
  SiTailwindcss,
  SiMysql,
  SiGit,
  SiGithub,
} from "react-icons/si";

import { DiJava } from "react-icons/di";

import type { Skill } from "../data/skills";

const ICON_MAP: Record<string, IconType> = {
  python: SiPython,
  javascript: SiJavascript,
  c: SiC,
  java: DiJava,

  scikitlearn: SiScikitlearn,
  pandas: SiPandas,
  numpy: SiNumpy,
  tensorflow: SiTensorflow,

  react: SiReact,
  fastapi: SiFastapi,
  nodejs: SiNodedotjs,
  tailwind: SiTailwindcss,

  mysql: SiMysql,
  git: SiGit,
  github: SiGithub,

  // Generic icons
  rag: Search,
  llm: MessageSquare,
};

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  const Icon = ICON_MAP[skill.icon] ?? Search;

  return (
    <motion.div
      whileHover={{
        y: -4,
        borderColor: "rgba(91,141,239,0.4)",
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        flex
        flex-col
        items-center
        gap-3
        rounded-2xl
        border
        border-white/10
        bg-base-900/60
        px-4
        py-6
        text-center
      "
    >
      <Icon
        size={26}
        className="text-accent-cyan"
        aria-hidden="true"
      />

      <span className="text-sm font-medium text-ink-100">
        {skill.name}
      </span>
    </motion.div>
  );
}