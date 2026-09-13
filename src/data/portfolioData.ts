export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  fullStory: string;
  category: string;
  year: string;
  tags: string[];
  features: string[];
  technologies: string[];
  metrics?: string;
  githubUrl?: string;
  liveUrl?: string;
  color: string;
  accent: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "database" | "languages" | "tools" | "ai";
  level: string;
  description: string;
  keywords: string[];
}

export const PROFILE = {
  name: "Nitin Saini",
  title: "Full Stack Developer",
  role: "Creative Developer & Digital Builder",
  age: 21,
  location: "India",
  city: "Jaipur",
  timezone: "Asia/Kolkata",
  email: "nitinisaini2005@gmail.com",
  github: "https://github.com/Nitinsaini-star",
  githubUsername: "Nitinsaini-star",
  linkedin: "https://www.linkedin.com/in/nitin-saini-a78810257/",
  statement: "I build interfaces, systems and experiences that people remember.",
  bio: "BCA Full Stack Development student focused on building modern web applications, interactive experiences and practical software products. Merging robust software engineering with high-touch creative interactivity.",
  currentFocus: "High-performance full-stack architectures, interactive 3D web interfaces, and modern scalable web ecosystems.",
  careerGoal: "Engineering transformative digital products and pushing the boundary of modern creative web development.",
  stats: [
    { label: "Core Projects", value: "8+" },
    { label: "Technologies", value: "12+" },
    { label: "Internship Exp.", value: "Verified" },
    { label: "Code Quality", value: "Production" },
  ],
};

export const SKILLS: SkillItem[] = [
  { name: "React", category: "frontend", level: "Core Specialist", description: "Component systems, state management, hooks architecture, and interactive UI engineering.", keywords: ["Hooks", "Context API", "Component Systems", "SPA Architecture"] },
  { name: "Node.js", category: "backend", level: "Advanced", description: "Server-side runtimes, asynchronous processing, REST APIs, and microservice patterns.", keywords: ["Express.js", "REST APIs", "Async I/O", "Middleware"] },
  { name: "JavaScript", category: "languages", level: "Deep Mastery", description: "ES6+, event loop, closures, functional programming, DOM manipulation, and asynchronous patterns.", keywords: ["ESNext", "Async/Await", "Event Loop", "Functional"] },
  { name: "MongoDB", category: "database", level: "Proficient", description: "NoSQL document schemas, aggregation pipelines, indexing, and Mongoose modeling.", keywords: ["Mongoose", "Aggregation", "Document Store", "Atlas"] },
  { name: "Java", category: "languages", level: "Core", description: "Object-oriented programming, data structures, algorithms, and modular backend foundations.", keywords: ["OOP", "Data Structures", "JVM", "Algorithms"] },
  { name: "Python", category: "languages", level: "Proficient", description: "Scripting, algorithmic computation, data parsing, and AI model integration.", keywords: ["Automation", "Data Processing", "Scripting", "API Integration"] },
  { name: "Tailwind CSS", category: "frontend", level: "Advanced", description: "Modern responsive design systems, fluid typography, utility-first CSS, and theme customization.", keywords: ["Design Systems", "Responsive", "CSS Grid", "Flexbox"] },
  { name: "HTML", category: "frontend", level: "Foundation", description: "Semantic web structure, accessibility standards, SEO metadata, and DOM hierarchy.", keywords: ["Semantic HTML5", "Accessibility", "SEO", "Microdata"] },
  { name: "CSS", category: "frontend", level: "Advanced", description: "3D transforms, keyframe animations, responsive grid layouts, custom properties, and shaders.", keywords: ["3D Transforms", "Keyframes", "Custom Properties", "Modern Layouts"] },
  { name: "Git", category: "tools", level: "Daily Driver", description: "Version control workflows, branch management, rebasing, and collaborative git-flow.", keywords: ["Branching", "Rebase", "Versioning"] },
  { name: "GitHub", category: "tools", level: "Advanced", description: "Open-source development, repository architecture, project management, and releases.", keywords: ["CI/CD", "Pull Requests", "Code Review", "Releases"] },
  { name: "AI / ML", category: "ai", level: "Applied", description: "LLM integration, prompt engineering, embedding retrieval, and intelligent assistant workflows.", keywords: ["LLMs", "Prompt Engineering", "API Integration"] },
];

const github = PROFILE.github;

export const PROJECTS: Project[] = [
  { id: "food-delivery-system", number: "01", title: "Food Delivery System", tagline: "End-to-end restaurant ordering and dispatch platform", description: "Digital ordering and logistics solution with restaurant menus, cart management, checkout, order tracking, and vendor management.", fullStory: "Built around a modular full-stack architecture for menus, basket calculation, authenticated checkout, and order status flows.", category: "Full Stack Web Application", year: "2025", tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"], features: ["Multi-restaurant catalog", "Persistent cart state", "Interactive checkout", "Delivery status tracker", "Restaurant partner portal"], technologies: ["React 18", "Node.js", "Express", "MongoDB", "REST API"], githubUrl: github, color: "#ff3b00", accent: "rgba(255, 59, 0, 0.15)" },
  { id: "skilllance", number: "02", title: "SkillLance", tagline: "Skill-based freelance marketplace and talent discovery platform", description: "Marketplace connecting developers, designers, and creators with clients through portfolio milestones and project contracts.", fullStory: "Designed around verified skill metrics, contract management, portfolio showcases, and direct client collaboration.", category: "Marketplace & Platform", year: "2025", tags: ["MERN Stack", "Tailwind CSS", "JWT Auth", "RESTful API"], features: ["Role-based authentication", "Gig posting and budgets", "Talent search filters", "Proposal submissions", "Milestone tracker"], technologies: ["React", "Express.js", "MongoDB", "Node.js", "JWT"], githubUrl: github, color: "#3b82f6", accent: "rgba(59, 130, 246, 0.15)" },
  { id: "lancly", number: "03", title: "Lancly", tagline: "Client engagement and freelance service workspace", description: "Collaborative workspace for freelancers to manage deliverables, invoices, milestones, and communication.", fullStory: "Unites project milestones, client feedback loops, secure asset sharing, and deliverable timelines in one interface.", category: "Productivity & SaaS", year: "2025", tags: ["React", "Node.js", "Express", "MongoDB"], features: ["Freelance project dashboard", "Client review portal", "Time tracking and invoices", "Deliverable statuses", "Secure asset sharing"], technologies: ["React", "Node.js", "Express", "MongoDB"], githubUrl: github, color: "#10b981", accent: "rgba(16, 185, 129, 0.15)" },
  { id: "marketsphere", number: "04", title: "MarketSphere", tagline: "Next-generation multi-category digital marketplace", description: "Commerce ecosystem with faceted search, inventory adjustments, reviews, variants, and modular checkout logic.", fullStory: "Built to demonstrate scalable e-commerce infrastructure with fast filtering, responsive ergonomics, and stateful basket manipulation.", category: "E-Commerce System", year: "2024", tags: ["React", "Node.js", "MongoDB", "REST API"], features: ["Faceted product search", "Image gallery and variants", "Persistent cart and wishlist", "Review aggregation", "Checkout confirmation"], technologies: ["React", "Node.js", "Express", "MongoDB"], githubUrl: github, color: "#f59e0b", accent: "rgba(245, 158, 11, 0.15)" },
  { id: "smart-kirana-store", number: "05", title: "Smart Kirana Store Management", tagline: "Digital POS, inventory ledger and retail automation", description: "Retail POS and inventory software for local stores to track stock, credit ledgers, billing, and daily revenue.", fullStory: "A digital transformation tool for neighborhood grocery stores with fast billing, low-stock alerts, and customer debt ledgers.", category: "Enterprise / Retail Software", year: "2024", tags: ["Java / Node.js", "React", "MongoDB", "Inventory POS"], features: ["Fast item billing", "Stock monitoring", "Khata / Udhar ledger", "Sales analytics", "Printable receipts"], technologies: ["React", "Node.js", "MongoDB", "Express"], githubUrl: github, color: "#8b5cf6", accent: "rgba(139, 92, 246, 0.15)" },
  { id: "ai-llm-chatbot", number: "06", title: "AI LLM Chatbot", tagline: "Intelligent conversational assistant with streaming responses", description: "Conversational AI interface with markdown rendering, system prompts, memory retention, and responsive chat dynamics.", fullStory: "Explores generative intelligence through syntax-highlighted code blocks, copy utilities, multi-turn memory, and readable typography.", category: "AI & Interactive Interface", year: "2025", tags: ["AI / LLM", "React", "Node.js", "Stream API"], features: ["Token streaming", "Markdown and code rendering", "Configurable prompts", "Chat history", "Responsive auto-scroll"], technologies: ["React", "Node.js", "Express", "AI LLM APIs"], githubUrl: github, color: "#ec4899", accent: "rgba(236, 72, 153, 0.15)" },
  { id: "ecommerce-website", number: "07", title: "E-Commerce Website", tagline: "Boutique retail platform with seamless purchase flow", description: "Online store with product collections, cart persistence, filtering, customer accounts, and order verification.", fullStory: "Focused on conversion-centric UX and smooth micro-interactions from discovery to order placement.", category: "Web Application", year: "2024", tags: ["React", "JavaScript", "Tailwind CSS", "Node.js"], features: ["Responsive collections", "Drawer cart", "Search and filters", "Account dashboard", "Mobile-first navigation"], technologies: ["React", "JavaScript", "Tailwind CSS", "Node.js"], githubUrl: github, color: "#06b6d4", accent: "rgba(6, 182, 212, 0.15)" },
  { id: "blog-application", number: "08", title: "Blog Application", tagline: "Developer-centric content publication and reader interaction", description: "Content platform with markdown authoring, category filtering, reading-time estimates, and comment threads.", fullStory: "Engineered for technical writers with semantic typography, SEO-friendly structures, themes, and lightweight APIs.", category: "Content & Publishing", year: "2024", tags: ["React", "Node.js", "Express", "MongoDB"], features: ["Markdown parser", "Reading time and TOC", "Category tagging", "Comments and reactions", "Admin authoring interface"], technologies: ["React", "Node.js", "Express", "MongoDB"], githubUrl: github, color: "#eab308", accent: "rgba(234, 179, 8, 0.15)" },
];

export const EXPERIENCE: ExperienceItem[] = [{ id: "sqrock-internship", role: "Full Stack Development Intern", company: "SQROCK IT SOLUTIONS", period: "Verified Internship", location: "India", type: "Internship", description: "Contributed to production web applications, responsive client interfaces, and backend RESTful services.", highlights: ["Built responsive React UI components", "Created RESTful APIs with Node.js and Express", "Optimized MongoDB queries and schemas", "Collaborated through Git workflows", "Implemented validation and error handling"], technologies: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "Git"] }];

export const EDUCATION: EducationItem[] = [{ degree: "BCA - Full Stack Development", field: "Computer Applications & Software Engineering", institution: "Jaipur National University", location: "Jaipur, Rajasthan, India", period: "Undergraduate Program", status: "Active / Ongoing", highlights: ["Full Stack Web Development architectures", "Data Structures and Object-Oriented Programming", "Database systems and MERN projects", "Technical coding and collaborative projects"] }];

export const GITHUB_REPOS = [
  { name: "Food-Delivery-System", description: "Full stack digital ordering platform with live cart, vendor management, and tracking.", stars: 18, forks: 5, language: "JavaScript / MERN", url: PROFILE.github },
  { name: "SkillLance-Platform", description: "Freelance marketplace connecting skilled talent with milestone-driven client contracts.", stars: 14, forks: 3, language: "React / Node.js", url: PROFILE.github },
  { name: "Smart-Kirana-Management", description: "Retail POS and inventory control ledger software tailored for grocery businesses.", stars: 12, forks: 4, language: "Full Stack", url: PROFILE.github },
  { name: "AI-LLM-Chat-Interface", description: "Modern generative AI conversational assistant with streaming tokens and code renderer.", stars: 22, forks: 7, language: "TypeScript / React", url: PROFILE.github },
];

export const SOCIAL_LINKS = [
  { name: "GitHub", url: PROFILE.github, handle: "@Nitinsaini-star" },
  { name: "LinkedIn", url: PROFILE.linkedin, handle: "Nitin Saini" },
  { name: "Email", url: `mailto:${PROFILE.email}`, handle: PROFILE.email },
  { name: "Instagram", url: "https://instagram.com", handle: "@nitin.saini" },
];
