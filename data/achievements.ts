type Achievement = {
  title: string;
  event: string;
  desc: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    title: "5th Place — VAND 4.0 Industrial Track",
    event: "CVPR 2026 Challenge",
    desc: "Zero-shot, class-agnostic industrial anomaly detection on unseen categories.",
    link: "https://benchmark.mvtec.com/vand2026-leaderboard?setting=zero-shot",
  },
  {
    title: "Runners-Up — Coderush 2025",
    event: "IUT Hackathon",
    desc: "24 hour hackathon to build a working full stack product from scratch on a surprise theme.",
  },
  {
    title: "7th Place — BUBT Datathon 2025",
    event: "24-Hour National Datathon",
    desc: "National datathon to build predictive models on a real world tabular dataset.",
  },
  {
    title: "Participant — SP Cup",
    event: "IEEE Signal Processing Cup",
    desc: "Deepfake detection with fine-tuned ML models; wrote a technical report.",
    link: "https://drive.google.com/file/d/1qZnPvQ-lz5LA3q-0hW6LqLIRKxDfmueg/view?usp=drive_link",
  },
  
];
