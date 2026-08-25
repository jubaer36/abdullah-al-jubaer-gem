type Research = {
  title: string;
  status: string;
  bullets: string[];
  link?: string;
};

export const research: Research[] = [
  {
    title: "Graph Based Multimodal Emotion Recognition in Conversations",
    status: "Undergraduate Thesis, In Progress",
    bullets: [
      "Conducted module level ablations across SOTA and isolated which components drive performance versus which are redundant, informing design choices for confusable emotion class discrimination.",
      "Designed multiple graph based fusion architectures to address modality imbalance, and underutilization of the visual modality and similar emotion confusion problem.",
    ],
    link: "https://github.com/jubaer36/Hopeful",
  },
  {
    title: "Alikbachan: Bengali LLM Hallucination Benchmark",
    status: "Submitted to ACL, Under Review",
    bullets: [
      "Tested frontier AI models on a 7,500+ item Bengali benchmark to see how well they hallucinated answers.",
      "Generated model confidence scores (log-probabilities) on benchmark responses to test if they could flag token level hallucinations.",
    ],
  },
  {
    title: "EthMuSAM: Zero-Shot Industrial Anomaly Detection",
    status: "CVPR Workshop",
    bullets: [
      "Zero-shot framework that detects defects in unseen product types without training.",
      "DINOv3-MuSc scoring locates suspect regions; cascaded SAM refines precise defect masks.",
    ],
    link: "https://github.com/jubaer36/EthMuSAM",
  },
  {
    title: "Multimodal Image Fusion: Medical CT–MRI Image Fusion",
    status: "Machine Learning Course Project",
    bullets: [
      "Fused CT and MRI scans into one image, keeping complementary detail for diagnosis.",
      "Curated a paired CT-MRI dataset; compared deep-learning and wavelet fusion methods.",
    ],
    link: "https://github.com/jubaer36/medfusion",
  },
  {
    title: "Weakly Supervised Named Entity Recognition via Sparse-CHMM and BERT",
    status: "Mathematical Analysis Course Project",
    bullets: [
      "Aggregates noisy labeling functions without ground-truth annotations.",
      "Models sequence dependencies using Sparse-CHMM with contextual embeddings.",
    ],
  },
];
