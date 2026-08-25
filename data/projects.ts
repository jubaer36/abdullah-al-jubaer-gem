type Project = {
  name: string;
  desc: string;
  stack: string[];
  github: string;
  link?: string;
};

export const projects: Project[] = [
  {
    name: "BizTrack — AI-Driven Business Management Platform",
    desc: "Full-stack platform with AI-driven financial analysis, risk alerts, and weather-aware demand forecasting. Next.js dashboard with customer/retention analytics, Supabase auth, Dockerized deployment.",
    stack: ["Next.js", "Express.js", "Supabase", "TypeScript", "Docker"],
    github: "https://github.com/jubaer36/BizTrack",
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
