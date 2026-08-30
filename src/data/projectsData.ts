export interface ProjectLink {
  label: string;
  url: string;
}

export interface FeaturedProject {
  number: string;
  title: string;
  descriptor: string;
  description: string;
  technologies: string[];
  links: ProjectLink[];
}

export interface AdditionalProject {
  title: string;
  technologies: string;
  url: string;
}

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    number: '01',
    title: 'AutoPilot AI',
    descriptor: 'Multi-agent automotive service advisor',
    description: 'Orchestrates multi-agent workflows to diagnose vehicle telemetry against customer complaints and query live supplier catalogs. Built reasoning pipelines with NVIDIA Nemotron, strict schema validation, and mandatory human-in-the-loop approval gates before executing state-mutating actions.',
    technologies: ['Next.js', 'TypeScript', 'NVIDIA Nemotron'],
    links: [
      { label: 'GitHub', url: 'https://github.com/kanishkay/computer-use' }
    ]
  },
  {
    number: '02',
    title: 'Acron',
    descriptor: 'Repository code intelligence system',
    description: 'Enables natural-language codebase search and contextual Q&A across GitHub repositories with exact source citations. Developed an AST parsing pipeline with Tree-sitter and SentenceTransformers, paired with sqlite-vec vector indexes for fast, scalable source retrieval.',
    technologies: ['Python', 'SQLite / sqlite-vec', 'SentenceTransformers'],
    links: [
      { label: 'GitHub', url: 'https://github.com/kanishkay/acorn' }
    ]
  },
  {
    number: '03',
    title: 'AGENTIS',
    descriptor: 'Clinical trial matching platform',
    description: 'Automates patient-to-trial eligibility screening against ClinicalTrials.gov criteria using IBM watsonx.ai. Engineered data ingestion pipelines and scoring algorithms that generate structured, explainable inclusion and exclusion rationales for clinical coordinators.',
    technologies: ['Python', 'IBM watsonx.ai', 'FastAPI'],
    links: [
      { label: 'GitHub', url: 'https://github.com/kanishkay' }
    ]
  },
  {
    number: '04',
    title: 'ContextMeter',
    descriptor: 'Agent context observability platform',
    description: 'Evaluates and optimizes LLM agent context windows before model inference to identify stale, redundant, or conflicting state. Engineered full-stack trace processing and deterministic validation workflows to maximize system reliability and reproducibility.',
    technologies: ['React', 'TypeScript', 'Express'],
    links: [
      { label: 'GitHub', url: 'https://github.com/kanishkay/ContextMeter' }
    ]
  }
];

export const ADDITIONAL_PROJECTS: AdditionalProject[] = [
  {
    title: 'LendingClub Loan Default Prediction',
    technologies: 'Deep Learning · TensorFlow',
    url: 'https://github.com/kanishkay/Lending_Club_Loan_Default_Prediction'
  },
  {
    title: 'Credit Card Customer Segmentation',
    technologies: 'Clustering · PCA · Scikit-learn',
    url: 'https://github.com/kanishkay'
  },
  {
    title: 'YouTube Spam Detection',
    technologies: 'NLP · TF-IDF · Naive Bayes',
    url: 'https://github.com/kanishkay'
  }
];
