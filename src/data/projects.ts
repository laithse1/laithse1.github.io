export const PROJECTS = [
  {
    title: 'Enterprise AI Runtime Platform',
    category: 'Platform engineering · AI systems',
    desc: 'A production-minded runtime for building, integrating, and operating enterprise AI workflows with clear boundaries between application logic, model services, data, and operations.',
    impact: 'Shows the ability to turn AI capabilities into a dependable platform: service design, orchestration, integrations, deployment, and operational thinking.',
    tags: ['Python', 'AI/LLM Systems', 'APIs', 'Docker', 'Platform Architecture'],
    link: 'https://github.com/laithse1/enterprise-ai-runtime-platform'
  },
  {
    title: 'DICOM Toolkit + OHIF Viewer',
    category: 'Healthcare · Full-stack systems',
    desc: 'A production-oriented medical-imaging workflow platform for ingesting, converting, de-identifying, cataloging, and viewing DICOM studies through a modern web application.',
    impact: 'Demonstrates healthcare interoperability, privacy-aware data workflows, asynchronous processing, and end-to-end product engineering across the stack.',
    tags: ['FastAPI', 'Next.js', 'pydicom', 'Orthanc/DICOMweb', 'OHIF', 'PostgreSQL', 'Docker'],
    link: 'https://github.com/laithse1/DICOM-toolkit-with-a-viewer'
  },
  {
    title: 'Kinship Verification Toolkit',
    category: 'Computer vision · Reproducible research',
    desc: 'A unified Python research toolkit for facial-image kinship verification, bringing classical baselines, metric-learning methods, deep models, and reproducible experiment presets into one workflow.',
    impact: 'Highlights research-grade experimentation, model comparison, dataset handling, evaluation design, and the discipline required to make ML results reproducible.',
    tags: ['Python', 'Computer Vision', 'Deep Learning', 'Metric Learning', 'Experimentation'],
    link: 'https://github.com/laithse1/kinship-verification-toolkit'
  },
  {
    title: 'UPUB: Ultrasound Privacy–Utility Benchmark',
    category: 'Medical AI · Privacy evaluation',
    desc: 'A benchmark for studying the trade-off between privacy protection and downstream utility in ultrasound imaging, with an emphasis on systematic, comparable evaluation.',
    impact: 'Connects responsible AI, medical imaging, privacy-preserving methods, and empirical benchmarking into a focused research workflow.',
    tags: ['Python', 'Medical Imaging', 'Privacy', 'Utility Evaluation', 'Benchmarking'],
    link: 'https://github.com/laithse1/Ultrasound-Privacy-Utility-Benchmark--UPUB-'
  }
] as const;
