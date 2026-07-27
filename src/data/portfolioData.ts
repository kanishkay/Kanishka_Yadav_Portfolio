import { EducationItem } from '../types/portfolio';

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  academicAssociation?: string;
  issueDate: string;
  credentialUrl?: string;
  description: string;
  skills: string[];
}

export const PERSONAL_INFO = {
  name: 'Kanishka Yadav',
  preferredTitle: 'Data Science Student',
  tagline: 'Building practical AI systems that connect machine learning with reliable software engineering.',
  university: 'San José State University',
  degree: 'Bachelor of Science in Data Science',
  graduationYear: 'May 2027',
  gpa: '3.72',
  location: 'San Jose, California',
  rolesRotating: [
    'AI Engineer',
    'Machine Learning Engineer',
    'Applied AI Engineer',
    'Backend Engineer',
    'Data Scientist',
  ],
  socials: {
    github: 'https://github.com/kanishkay',
    linkedin: 'https://linkedin.com/in/kanishkayadvv',
    instagram: 'https://instagram.com/kanishkay_',
    email: '11kanishkay@gmail.com',
    location: 'San Jose, California',
    phone: '',
  },
  highlights: [
    { label: 'Degree', value: 'B.S. Data Science @ SJSU' },
    { label: 'Graduation', value: 'Expected May 2027' },
    { label: 'Industry Internship', value: 'AI Software Developer Intern @ SAP America' },
    { label: 'Co-Founder', value: 'Co-Founder & AI Engineer @ AGENTIS' },
    { label: 'Fellowship', value: 'Break Through Tech AI Fellow (Cornell Tech)' },
  ],
  factualBio: `Kanishka Yadav is a Data Science student at San José State University interested in building practical AI systems that connect machine learning with reliable software engineering. His work includes multi-agent workflows, computer-use agents, semantic retrieval, AI-agent context observability, machine learning pipelines, backend APIs, databases, and infrastructure automation. He is currently focused on LLM engineering, agentic systems, Retrieval-Augmented Generation, MLOps, distributed systems, and scalable AI infrastructure.`,
};

export const EDUCATION: EducationItem[] = [
  {
    sourceStatus: 'verified',
    verifiedClaims: [
      'San José State University student in Bachelor of Science Data Science',
      'GPA 3.72 / 4.00',
      'Expected graduation May 2027'
    ],
    sourceReferences: [
      {
        sourceType: 'supplied-resume',
        sourceLabel: 'Kanishka_Yadav_Resume.pdf',
        supports: ['SJSU B.S. Data Science', 'GPA 3.72', 'Expected May 2027'],
        confirmedExists: true
      }
    ],
    institution: 'San José State University',
    degree: 'Bachelor of Science',
    major: 'Data Science',
    period: 'Expected May 2027',
    gpa: '3.72 / 4.00',
    location: '',
    relevantCoursework: [
      'Data Structures and Algorithms',
      'Object-Oriented Programming',
      'Artificial Intelligence',
      'Database Management Systems',
      'Computer Systems',
      'Linear Algebra',
      'Discrete Mathematics',
      'Calculus I & II',
    ],
  },
  {
    sourceStatus: 'verified',
    verifiedClaims: [
      'Break Through Tech AI Fellow',
      'Machine Learning Foundations e-Certificate'
    ],
    needsReviewClaims: [
      'Specific institutional branding (Cornell Tech vs Cornell University) awaiting physical credential inspection'
    ],
    sourceReferences: [
      {
        sourceType: 'supplied-resume',
        sourceLabel: 'Kanishka_Yadav_Resume.pdf',
        supports: ['Break Through Tech AI Fellow', 'Machine Learning Foundations e-Certificate'],
        confirmedExists: true
      }
    ],
    institution: 'Break Through Tech AI',
    degree: 'Break Through Tech AI Fellow',
    major: 'Machine Learning Foundations e-Certificate',
    period: 'May 2026 – August 2026',
    gpa: 'e-Certificate',
    location: '',
    relevantCoursework: [
      'Machine learning',
      'Responsible AI',
      'Professional development',
      'Team collaboration',
      'Industry-oriented technical work',
    ],
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'btt-ml-foundations',
    title: 'Machine Learning Foundations e-Certificate',
    issuer: 'Break Through Tech AI',
    academicAssociation: 'Cornell Tech',
    issueDate: 'August 2026',
    description: 'Machine Learning Foundations e-Certificate associated with Cornell Tech covering machine learning, responsible AI, professional development, team collaboration, and industry-oriented technical work.',
    skills: ['Machine Learning', 'Responsible AI', 'Team Collaboration', 'Technical Work']
  }
];
