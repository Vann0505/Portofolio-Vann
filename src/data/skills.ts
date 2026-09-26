export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    skills: [
      { name: "Python", icon: "python" },
      { name: "JavaScript", icon: "javascript" },
      { name: "C", icon: "c" },
    ],
  },
  {
    category: "AI / Machine Learning",
    skills: [
      { name: "Scikit-learn", icon: "scikitlearn" },
      { name: "Pandas", icon: "pandas" },
      { name: "NumPy", icon: "numpy" },
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "RAG", icon: "rag" },
      { name: "LLM", icon: "llm" },
    ],
  },
  {
    category: "Web Development",
    skills: [
      { name: "React", icon: "react" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    category: "Database / Tools",
    skills: [
      { name: "MySQL", icon: "mysql" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
    ],
  },
];