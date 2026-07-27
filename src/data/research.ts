export const RESEARCH_PUBLICATION = {
  title: 'Kinship Verification from Face Imagery',
  status: 'Working paper',
  year: '2026',
  summary:
    'A draft manuscript centered on a unified research toolkit for kinship verification, bringing classical descriptors, metric-learning pipelines, deep models, and gated pair-representation learning into one reproducible experimental framework.',
  highlights: [
    'Unifies four kinship-verification method families behind one reproducible CLI and config system.',
    'Supports public benchmarks alongside a curated in-house dataset spanning age variation, family archives, and identical-twin subsets.',
    'Produces experiment outputs designed for paper-ready comparison, ablation studies, and follow-on model development.'
  ],
  pdfUrl:
    'https://github.com/laithse1/kinship-verification-toolkit/blob/main/paper_draft/kinship_paper.pdf'
} as const

export const RESEARCH_PROJECT = {
  title: 'Kinship Verification Toolkit',
  subtitle: 'Research infrastructure for reproducible computer-vision experiments',
  summary:
    'This project turns a fragmented kinship-verification literature into a maintainable Python platform for running, comparing, and extending experiments across multiple algorithmic families.',
  problem:
    'Kinship verification is challenging because resemblance signals are subtle, age-dependent, and easily confounded by pose, lighting, and expression. The project focuses on building research infrastructure that makes these experiments cleaner, more comparable, and easier to extend.',
  approach: [
    'Classical feature baselines using handcrafted pair descriptors.',
    'Metric-learning style KinVer experiments over bundled feature matrices.',
    'Native deep-learning pipelines for KinFaceW and FIW-style settings.',
    'Gated Autoencoder variants for pairwise representation learning.'
  ],
  contributions: [
    'Designed a unified CLI, config system, and reporting layout for consistent experimentation.',
    'Integrated public benchmark workflows with support for a local private dataset adapter.',
    'Created a cleaner base for benchmarking, ablations, publication-ready reporting, and future model extensions.'
  ],
  stats: [
    { value: '4', label: 'method families' },
    { value: '220', label: 'inferred family groups' },
    { value: '805', label: 'people in local dataset' },
    { value: '2,318', label: 'images in local dataset' }
  ],
  focusAreas: [
    'Computer Vision',
    'Biometrics',
    'Representation Learning',
    'Metric Learning',
    'Reproducible ML Systems',
    'Dataset Engineering'
  ],
  repoUrl: 'https://github.com/laithse1/kinship-verification-toolkit'
} as const

export const RESEARCH_IN_PROGRESS = {
  title: 'Accessible Maps: Deterministic Geospatial Tool Use for LLM Map QA',
  subtitle: 'Current research collaboration · Georgia Tech Sonification Lab',
  summary:
    'A research prototype for accessible map question answering. An LLM translates natural-language questions into structured plans, while deterministic GeoPandas and Shapely tools perform the spatial reasoning and produce auditable traces.',
  researchQuestion:
    'Can language models handle question decomposition while deterministic geospatial tools handle exact topology, distance, direction, and thematic reasoning?',
  milestone:
    'The current evaluation suite studies generalization across map types, question families, planner models, and external benchmarks.',
  metrics: [
    { value: '90.3%', label: 'Evaluation 1' },
    { value: '95.3%', label: 'Evaluation 3' },
    { value: '3,154', label: 'MapQA questions' }
  ],
  focusAreas: ['Geospatial Computing', 'MCP', 'GeoPandas + Shapely', 'LLM Evaluation', 'Accessible Map QA'],
  repoUrl: 'https://github.gatech.edu/SonificationLab/geospatial-mcp-server'
} as const
