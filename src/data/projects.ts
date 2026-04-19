export interface Project {
  title: string;
  repoName: string; // user/repo format for API calls
  description: string;
  tags: string[];
  link: string; // Live demo or repo link
  github: string;
}

export const projects: Project[] = [
  {
    title: "Beat-The-ATS",
    repoName: "indiser/Beat-The-ATS",
    description:
      "🤖 Analyze your resume against job descriptions using NLP & machine learning. Get keyword matches and semantic scores to optimize your ATS pass-through rate.",
    tags: ["python", "nlp" ,"resume" ,"flask" ,"machine-learning" ,"natural-language-processing" ,"text-analysis" ,"python3", "semantic-similarity" ,"ats" ,"job-search" ,"streamlit" ,"cv-optimization" ,"career-tools"],
    link: "https://github.com/indiser/Beat-The-ATS",
    github: "https://github.com/indiser/Beat-The-ATS",
  },
  {
    title: "AdmitCards",
    repoName: "indiser/AdmitCards",
    description:
      "Automated high-volume document generation pipeline processing 1,000+ personalized assets in minutes. Optimized image compression by 80% and reduced processing time by 3.6x using multi-threading.",
    tags: ["Python", "Multi-threading", "Image Optimization"],
    link: "https://github.com/indiser/AdmitCards", // Assuming no live demo was found easily, defaulting to repo
    github: "https://github.com/indiser/AdmitCards",
  },
  {
    title: "LinkedIn Scraper",
    repoName: "indiser/LinkedIn-profile-scraper",
    description:
      "Scalable data extraction engine with intelligent rate limiting and retry logic. Enables automated market research by structuring unstructured public data into actionable CSV/JSON formats.",
    tags: ["Python", "Web Scraping", "Data Pipeline"],
    link: "https://github.com/indiser/LinkedIn-profile-scraper",
    github: "https://github.com/indiser/LinkedIn-profile-scraper",
  },
  {
    title: "InvoiceParse",
    repoName: "indiser/InvoiceParse",
    description:
      "Financial data automation tool converting unstructured PDF invoices into structured datasets. Streamlines accounting workflows by automatically extracting key entities like pricing and vendor info.",
    tags: ["Python", "OCR", "Data Extraction"],
    link: "https://github.com/indiser/InvoiceParse",
    github: "https://github.com/indiser/InvoiceParse",
  },
  {
    title: "microGPT",
    repoName: "indiser/microGPT",
    description:
      "Resource-efficient LLM fine-tuning framework using LoRA. Reduced trainable parameters by 99% (124M to 294K), enabling model customization on consumer-grade hardware without performance loss.",
    tags: ["Python", "PyTorch", "LoRA", "LLM"],
    link: "https://github.com/indiser/microGPT",
    github: "https://github.com/indiser/microGPT",
  },
  {
    title: "URL Shortener",
    repoName: "indiser/URL-Shortener",
    description:
      "High-performance link management service with built-in security analysis. Features real-time click tracking and protects against open redirect vulnerabilities using a custom validation layer.",
    tags: ["Python", "Flask", "Security", "JavaScript"],
    link: "https://github.com/indiser/URL-Shortener",
    github: "https://github.com/indiser/URL-Shortener",
  },
  {
    title: "AI Prompt Benchmark",
    repoName: "indiser/Ai_Prompt_Benchmark",
    description:
      "Quantitative evaluation suite for AI prompt engineering. Provides a standardized framework to measure and optimize LLM output quality across different model versions.",
    tags: ["Python", "AI Evaluation", "Benchmarking"],
    link: "https://github.com/indiser/Ai_Prompt_Benchmark",
    github: "https://github.com/indiser/Ai_Prompt_Benchmark",
  },
];
