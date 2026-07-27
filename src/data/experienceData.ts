import { ExperienceItem } from '../types/portfolio';

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'sap-america-intern',
    sourceStatus: 'verified',
    verifiedClaims: [
      'Supported cloud infrastructure automation using Python, Ansible, Docker, and Kubernetes'
    ],
    sourceReferences: [
      {
        sourceType: 'supplied-resume',
        sourceLabel: 'Kanishka_Yadav_Resume.pdf',
        supports: ['AI Software Developer Intern at SAP America, Inc.', 'Python, Ansible, Docker, Kubernetes'],
        confirmedExists: true
      }
    ],
    role: 'AI Software Developer Intern',
    companyOrOrg: 'SAP America, Inc.',
    location: '',
    period: 'June 2026 – August 2026',
    category: 'Internships',
    summary: 'Supporting cloud infrastructure automation by developing internal engineering automation workflows using Python, Docker, Kubernetes, Ansible, and Claude Code to reduce repetitive operational tasks and improve engineering productivity.',
    responsibilities: [
      'Supporting cloud infrastructure automation by developing internal engineering automation workflows using Python, Docker, Kubernetes, Ansible, and Claude Code to reduce repetitive operational tasks and improve engineering productivity.',
      'Collaborating with engineering teams to automate internal workflows, improve deployment reliability, and reduce repetitive operational processes.'
    ],
    achievements: [],
    technologies: ['Python', 'Docker', 'Kubernetes', 'Ansible', 'Claude Code'],
    impactMetrics: [
      { label: 'Role', value: 'AI Software Developer Intern' },
      { label: 'Domain', value: 'Cloud Automation' }
    ]
  },
  {
    id: 'agentis-cofounder',
    sourceStatus: 'verified',
    verifiedClaims: [
      'Co-developed AI-powered platform helping clinical coordinators identify potentially relevant clinical trials',
      'Supports patient-to-trial matching workflows',
      'Integrated IBM watsonx.ai and ClinicalTrials.gov REST APIs',
      'Evaluates possible eligibility criteria and ranks potentially relevant trials',
      'Provides explainable recommendations for coordinator review'
    ],
    sourceReferences: [
      {
        sourceType: 'supplied-resume',
        sourceLabel: 'Kanishka_Yadav_Resume.pdf',
        supports: ['Co-Founder and AI Engineer at AGENTIS', 'IBM watsonx.ai', 'ClinicalTrials.gov REST APIs'],
        confirmedExists: true
      }
    ],
    role: 'Co-Founder & AI Engineer',
    companyOrOrg: 'AGENTIS',
    location: '',
    period: 'February 2026 – Present',
    category: 'Leadership',
    summary: 'Co-developing a modular multi-agent platform integrating IBM watsonx.ai and ClinicalTrials.gov APIs to support explainable clinical-trial matching workflows.',
    responsibilities: [
      'Co-developing a modular multi-agent platform integrating IBM watsonx.ai and ClinicalTrials.gov APIs to support explainable clinical-trial matching workflows.',
      'Developing explainable patient-to-trial eligibility scoring to streamline clinical search workflows for coordinators.'
    ],
    achievements: [
      'Streamlined clinical-trial search workflows for coordinator review'
    ],
    technologies: ['Python', 'IBM watsonx.ai', 'ClinicalTrials.gov REST APIs', 'Multi-Agent Systems', 'Explainable AI'],
    impactMetrics: [
      { label: 'Workflow Acceleration', value: 'Hours to Minutes' }
    ]
  }
];
