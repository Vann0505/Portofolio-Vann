export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  details: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "OBESITY PREDICTOR",
    description:
      "Machine Learning powered web application built with Streamlit to assess and predict an individual's obesity risk levels.",
    image: "public/Picture/1.png",
    technologies: ["Python", "Maching Learning", "Streamlit", "Pandas & NumPy"],
    github: "https://github.com/Vann0505/ObesityPredictor",
    demo: "https://obesitypredictor-7spq9qsudewot5b85edf5i.streamlit.app/",
    details:
      "This project is an interactive, Machine Learning-powered web application built with Streamlit to assess and predict an individual's obesity risk levels. By taking inputs regarding a user's physical attributes (age, height, weight) and daily lifestyle habits (eating patterns, physical activity levels, and transportation methods), the application provides real-time, data-driven health insights.",
  },
  {
    id: 2,
    title: "Study Assistant Using RAG",
    description:
      "AI-powered document Q&A system that uses RAG to retrieve relevant information from uploaded documents and generate contextual answers with Gemini AI.",
    image: "public/Picture/2.png",
    technologies: ["Python", "FastAPI", "Gemini API", "ChromaDB", "PyPDF"],
    github: "https://github.com/",
    demo: "#",
    details:
      "An AI-powered document Q&A system built with Retrieval-Augmented Generation (RAG). Users can upload PDF documents and ask questions about their content. The system extracts and chunks the text, stores it as vector embeddings, retrieves relevant information, and uses Gemini AI to generate contextual answers.",
  },
  {
    id: 3,
    title: "Task-Weaver",
    description:
      "A web app that automatically analyzes team capacity, skill sets, and project deadlines to distribute tasks fairly and boost productivity.",
    image: "public/Picture/3.jpeg",
    technologies: ["JavaScript", "CSS", "SupaBase"],
    github: "https://github.com/rfvvel/TaskWeaver",
    demo: "#",
    details:
      "AI Task Allocator is an intelligent web application designed to eliminate manual project coordination by using artificial intelligence to evaluate team capacity, skill sets, and deadlines for automatic task distribution. By continuously analyzing real-time workloads and task priorities, the platform prevents burnout, ensures fair work distribution, and cuts project planning time by up to 80%. This data-driven approach removes delegation bias and administrative overhead, allowing modern teams to focus entirely on high-impact execution.",
  },
  {
    id: 4,
    title: "Campus Navigator",
    description:
      "A ldings on campus.",
    image: "/Picture/3.jpeg",
    technologies: ["React", "Node.js", "MySQL"],
    github: "https://github.com/",
    demo: "#",
    details:
      "AI Task Allocator is an intelligent web application designed to eliminate manual project coordination by using artificial intelligence to evaluate team capacity, skill sets, and deadlines for automatic task distribution. By continuously analyzing real-time workloads and task priorities, the platform prevents burnout, ensures fair work distribution, and cuts project planning time by up to 80%. This data-driven approach removes delegation bias and administrative overhead, allowing modern teams to focus entirely on high-impact execution.",
  },
];
