export interface EditorialExperience {
  id: string;
  period: string;
  company: string;
  role: string;
  location?: string;
  description: string;
}

export const EXPERIENCES: EditorialExperience[] = [
  {
    id: '7eleven-ai-fellow',
    period: '2026 — Present',
    company: '7-Eleven',
    role: 'Break Through Tech AI Studio Fellow',
    location: 'Irving, TX',
    description: 'Partnered with 7-Eleven on an industry-sponsored AI challenge through Break Through Tech, engineering machine learning pipelines and predictive models to solve enterprise retail data and operational workflows.'
  },
  {
    id: 'sap-america-intern',
    period: 'Summer 2026',
    company: 'SAP America',
    role: 'AI Software Developer Intern',
    location: 'Palo Alto, CA',
    description: 'Worked with Cloud Infrastructure Automation workflows, supporting enterprise deployment pipelines and system synchronization.'
  },
  {
    id: 'agentis-cofounder',
    period: 'Feb. 2026 — Aug. 2026',
    company: 'AGENTIS',
    role: 'Co-Founder & AI Engineer',
    location: 'San Jose, CA',
    description: 'Co-founded a clinical trial matching platform integrating IBM watsonx.ai and ClinicalTrials.gov. Engineered Python backend pipelines and eligibility-scoring algorithms to automate patient screening, transforming raw clinical eligibility data into structured, explainable match rationales for research coordinators.'
  },
  {
    id: 'btt-fellow',
    period: 'May 2026 — Present',
    company: 'Break Through Tech',
    role: 'AI Fellow',
    description: 'Selected from a national pool of 4,300+ applicants for a competitive 12-month artificial intelligence fellowship, completing rigorous machine learning curriculum, applied deep learning coursework, and enterprise engineering projects.'
  }
];
