type CurrentItem = {
  title: string;
  meta: string;
  points: string[];
};

export const current: CurrentItem[] = [
  {
    title: "Source-Grounded Legal Q&A Assistant",
    meta: "Independent Research · Bangladesh Code of Criminal Procedure",
    points: [
      "Answers questions on the Code of Criminal Procedure and its amendments with section-level citations.",
      "RAG pipeline retrieves the relevant sections and has an LLM answer only from them instead of guessing.",
    ],
  },
  {
    title: "EthMuSAM — Zero-Shot Industrial Anomaly Detection",
    meta: "CVPR Workshop",
    points: [
      "Zero-shot framework that detects defects in unseen product types without any training.",
      "DINOv3-MuSc scoring locates suspect regions; cascaded SAM refines precise defect masks.",
      "Extending the same approach to a full-shot anomaly detection setting.",
    ],
  },
  {
    title: "Graph-Based Multimodal Emotion Recognition in Conversations",
    meta: "Undergraduate Thesis · Submitted to WACV, under review",
    points: [
      "Module-level ablations across SOTA models to isolate which components drive performance versus which are redundant, informing design choices for confusable emotion-class discrimination.",
      "Designed multiple graph-based fusion architectures addressing modality imbalance, visual-modality underutilization, and similar-emotion confusion.",
    ],
  },
  {
    title: "Knee Abnormality Detection Challenge",
    meta: "Kaggle Competition · ongoing",
    points: [
      "Building models to detect knee abnormalities from medical imaging for the hosted Kaggle challenge.",
    ],
  },
  {
    title: "Khoj the Search",
    meta: "Next.js · FastAPI · Python · Crawl4AI · MongoDB · Clerk — in progress",
    points: [
      "Full-stack platform that crawls multiple retailers to aggregate and compare tech products.",
      "Entity matching unifies duplicate listings; PC-build engine generates compatible, budget-aware builds.",
    ],
  },
  {
    title: "Skribe — AI Handwriting & Drawing Tutor for Kids",
    meta: "Next.js · FastAPI · Python · PostgreSQL · Supabase · Canvas — in progress",
    points: [
      "AI tutor that helps kids learn handwriting and drawing from memory instead of tracing.",
      "Compares each attempt to the target, shows the child what they missed, and gives step-by-step hints to fix it.",
    ],
  },
];
