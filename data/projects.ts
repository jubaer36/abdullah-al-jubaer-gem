type ProjectDetails = {
  overview?: string;
  demoUrl?: string;
  features?: { label: string; desc: string }[];
  techStack?: { group: string; items: string[] }[];
};

type Project = {
  name: string;
  desc: string;
  stack: string[];
  github: string;
  link?: string;
  details?: ProjectDetails;
};

export const projects: Project[] = [
  {
    name: "BizTrack — AI-Driven Business Management Platform",
    desc: "Full-stack platform with AI-driven financial analysis, risk alerts, and weather-aware demand forecasting. Next.js dashboard with customer/retention analytics, Supabase auth, Dockerized deployment.",
    stack: ["Next.js", "Express.js", "Supabase", "TypeScript", "Docker"],
    github: "https://github.com/jubaer36/BizTrack",
    details: {
      overview:
        "A full-stack business management application with Next.js frontend and Express.js backend, using Supabase for authentication.",
      features: [
        { label: "User Authentication", desc: "Register, login, logout, and password reset" },
        { label: "Secure Backend", desc: "Express.js API with Supabase authentication" },
        { label: "Modern Frontend", desc: "Next.js 16 with TypeScript and Tailwind CSS" },
        {
          label: "Dashboard",
          desc: "User dashboard with an overview of the business and other feature options for analysis",
        },
        {
          label: "Real-time Revenue & Expense Tracking",
          desc: "Instantly monitor cash flow and financial performance",
        },
        {
          label: "AI Financial Analysis & Risk Alerts",
          desc: "Get intelligent insights and automatic risk notifications",
        },
        {
          label: "Cash Flow Management & AI Assistant",
          desc: "Automate financial decisions and optimize liquidity",
        },
        {
          label: "Customer Insights & Retention",
          desc: "Understand customers deeply with AI-driven segmentation and churn prevention",
        },
        {
          label: "Intelligent Data Mapping & Automation",
          desc: "Transform messy data into structured databases with zero setup",
        },
        {
          label: "AI Demand Forecasting",
          desc: "Predict product demand using history, holidays, and weather trends",
        },
      ],
      techStack: [
        {
          group: "Frontend",
          items: [
            "Next.js 16",
            "TypeScript",
            "Tailwind CSS",
            "Shadcn",
            "React Context for state management",
          ],
        },
        {
          group: "Backend",
          items: [
            "Express.js",
            "Supabase for authentication",
            "CORS and security middleware",
            "Rate limiting",
          ],
        },
      ],
    },
  },
  {
    name: "Redrick-Routinson — University Management Webapp",
    desc: "Role-based university platform for admins, teachers, and students. Genetic-algorithm class scheduling, automated exam seat planning, and QR attendance.",
    stack: ["Python", "React.js", "Chakra UI", "Flask", "Firebase"],
    github: "https://github.com/jubaer36/Redrick_Routinson",
  },
  {
    name: "No-Brainer — AI-Powered Fitness Program Generator",
    desc: "AI-generated workout and diet plans with voice-assistant onboarding. Clerk auth, real-time Convex backend, deployed on Vercel.",
    stack: ["Next.js", "React.js", "Tailwind CSS", "Convex", "Clerk", "Google Generative AI", "VAPI"],
    github: "https://github.com/jubaer36/no-brainer",
  },
  {
    name: "Student Marketplace",
    desc: "Student trading platform with real-time chat and bidding. AI item analysis and chatbot via GROQ API, Firebase auth and admin controls.",
    stack: ["React.js", "Firebase", "Vite", "GROQ API"],
    github: "https://github.com/jubaer36/CodeRush25",
  },
  {
    name: "Ruby — Learn the Rubik's Cube",
    desc: "Desktop app for stepwise Rubik's Cube solving with interactive visualizations. Manual cube-state input and automated solution demo, built in JavaFX/Swing.",
    stack: ["Java", "JavaFX", "Swing"],
    github: "https://github.com/jubaer36/Ruby",
  },
  {
    name: "The Continental — Hotel Management System",
    desc: "Hotel management with room booking, check-in/out, and admin controls. React/Node.js/MySQL stack with JWT authentication.",
    stack: ["React", "Node.js", "MySQL"],
    github: "https://github.com/jubaer36/HotelManagementSystem",
  },
];
