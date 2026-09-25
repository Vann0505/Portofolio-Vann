export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo?: string;
  details: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "OBESITY PREDICTOR",
    description:
      "Machine Learning powered web application built with Streamlit to assess and predict an individual's obesity risk levels.",
    image: "/Picture/1.png",
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
    image: "/Picture/2.png",
    technologies: ["Python", "FastAPI", "Gemini API", "ChromaDB", "PyPDF"],
    github: "https://github.com/",
    details:
      "An AI-powered document Q&A system built with Retrieval-Augmented Generation (RAG). Users can upload PDF documents and ask questions about their content. The system extracts and chunks the text, stores it as vector embeddings, retrieves relevant information, and uses Gemini AI to generate contextual answers.",
  },
  {
    id: 3,
    title: "Task-Weaver",
    description:
      "A web app that automatically analyzes team capacity, skill sets, and project deadlines to distribute tasks fairly and boost productivity.",
    image: "/Picture/3.jpeg",
    technologies: ["JavaScript", "CSS", "SupaBase"],
    github: "https://github.com/rfvvel/TaskWeaver",
    details:
      "AI Task Allocator is an intelligent web application designed to eliminate manual project coordination by using artificial intelligence to evaluate team capacity, skill sets, and deadlines for automatic task distribution. By continuously analyzing real-time workloads and task priorities, the platform prevents burnout, ensures fair work distribution, and cuts project planning time by up to 80%. This data-driven approach removes delegation bias and administrative overhead, allowing modern teams to focus entirely on high-impact execution.",
  },
  {
    id: 4,
    title: "AI APP - Plastic Waste",
    description:
      "An AI-powered React Native web application that helps users manage plastic waste through recycling information, waste collection schedules, and AI-powered waste classification.",
    image: "/Picture/4.png",
    technologies: ["React Native", "LLM", "ChatGPT API", "AI Image Classification"],
    github: "https://github.com/Vann0505/AI-APP---Plastic-Waste",
    demo: "https://recycling-ai-app.pages.dev/",
    details:
      "An AI-powered application designed to support SDG 12: Responsible Consumption and Production by helping users make better decisions about plastic waste. The application provides waste collection schedules, an AI chatbot for recycling-related questions, and image-based waste classification to identify whether an item can be recycled or should be treated as non-recyclable waste. Built with React Native and an LLM, the project combines AI with practical waste management features to encourage more responsible recycling habits.",
  },
  {
    id: 5,
    title: "Data Analytic(Used Car Price)",
    description:
      "Analyzed used car prices using Python and SQL to uncover patterns related to brand, model year, mileage, and accident history.",
    image: "/Picture/5.png",
    technologies: ["Python", "SQL"],
    github: "https://github.com/Vann0505/used-car-price-analysis",
    details:
      "A data analytics project focused on analyzing 4,009 used car listings to identify patterns and relationships between vehicle characteristics and price.The project uses Python with Pandas, NumPy, Matplotlib, and Seaborn for data cleaning, exploratory data analysis, and visualization. SQLite was also used to perform SQL-based analysis, including aggregation, CASE WHEN, CTEs, and reusable SQL views.The analysis examines how brand, model year, mileage, and accident history are associated with used car prices, producing data-driven insights while considering data quality issues, missing values, and extreme price values.",
  },
  {
    id: 6,
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
  {
    id: 7,
    title: "NoiseCore",
    description:
      "A modern e-commerce website for audio peripherals, featuring product browsing, exclusive deals, membership benefits, and a clean user-focused shopping experience.",
    image: "/Picture/7.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Vann0505/NoiseCore---Website",
    details:
      "NoiseCore is an e-commerce website designed for selling audio peripherals such as headphones, earphones, and other audio accessories. The website includes Home, Product, About NC, Deals, and Join Member pages, providing users with an organized way to explore products, discover special offers, and learn more about the brand. Built from scratch using HTML, CSS, and JavaScript with a focus on responsive design and interactive user experience.",
  },
];
