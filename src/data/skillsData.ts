import { SkillCategory } from '../types/portfolio';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    categoryKey: 'languages',
    description: 'Core languages for AI, systems, and data analysis.',
    skills: [
      'Python',
      'TypeScript',
      'Java',
      'C++',
      'SQL'
    ]
  },
  {
    title: 'AI & Machine Learning',
    categoryKey: 'ai_ml',
    description: 'LLM orchestration, agentic architectures, and ML frameworks.',
    skills: [
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'SentenceTransformers',
      'Retrieval-Augmented Generation',
      'Multi-agent systems',
      'Computer-use agents',
      'IBM watsonx.ai',
      'NVIDIA Nemotron',
      'Gemini API'
    ]
  },
  {
    title: 'Backend & Web Systems',
    categoryKey: 'backend_web',
    description: 'Services, APIs, and modern web frameworks.',
    skills: [
      'Express',
      'Next.js',
      'Flask',
      'React',
      'REST APIs'
    ]
  },
  {
    title: 'Databases & Vector Storage',
    categoryKey: 'databases',
    description: 'Relational databases and embedded vector search.',
    skills: [
      'PostgreSQL',
      'SQLite',
      'sqlite-vec',
      'MySQL'
    ]
  },
  {
    title: 'Infrastructure & Tools',
    categoryKey: 'infra_tools',
    description: 'Containerization, cloud, and automation workflows.',
    skills: [
      'Docker',
      'Kubernetes',
      'Ansible',
      'Claude Code',
      'Git',
      'Google Cloud Run'
    ]
  }
];

export const CURRENTLY_DEVELOPING = [
  { name: 'LLM Engineering & Prompt Optimization', desc: 'Custom fine-tuning, structured output schema generation, and guardrails.' },
  { name: 'AI Agents & Multi-Agent Frameworks', desc: 'Autonomous agent loops, tool calling protocols, and state synchronization.' },
  { name: 'Advanced RAG Systems', desc: 'Hybrid dense-sparse retrieval, reciprocal rank fusion, and semantic chunking.' },
  { name: 'MLOps & Model Serving Infrastructure', desc: 'Model deployment automation, container orchestration, and continuous monitoring.' },
  { name: 'Distributed Systems', desc: 'High-throughput fault-tolerant backend architectures and queueing.' },
  { name: 'Cloud AI Infrastructure', desc: 'Cloud automation, serverless inference, and GPU resource scaling.' },
];
