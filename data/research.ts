type Research = {
  title: string;
  status: string;
  bullets: string[];
  link?: string;
};

export const research: Research[] = [
  {
    title: "Alikbachan: Bengali LLM Hallucination Benchmark",
    status: "Accepted to EACL Findings",
    bullets: [
      "Designed and curated the Bengali hallucination benchmark in collaboration with EBLICT and IPD.",
      "Benchmarked frontier LLMs on a 7,500+ item Bengali dataset, evaluating factual accuracy per response.",
      "Generated model confidence scores on benchmark responses to test if they could flag token level hallucinations.",
    ],
    link: "https://alikbachan.github.io/",
  },
  {
    title: "EthMuSAM: Zero-Shot Industrial Anomaly Detection",
    status: "CVPR Workshop Challenge",
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
