export interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
  location: string;
  details?: string;
  coursework?: string[];
}

export const PERSONAL_INFO = {
  name: 'Kanishka Yadav',
  title: 'Data Science & Software Engineering',
  university: 'San José State University',
  focus: 'Designing reliable machine learning systems, agentic workflows, and backend infrastructure.',
  location: 'San Jose, California',
  email: '11kanishkay@gmail.com',
  github: 'https://github.com/kanishkay',
  linkedin: 'https://linkedin.com/in/kanishkayadvv',
  resumeUrl: '/resume.pdf',
  aboutParagraphs: [
    'Hi, I’m Kanishka Yadav, a Data Science student at San José State University interested in building intelligent systems with Generative AI, LLMs, and machine learning. I enjoy exploring how AI can move beyond simple predictions and prompts to build systems that can reason, retrieve information, and work across multiple steps.',
    'Through my experiences and projects, I’ve been building with AI agents, RAG, semantic search, and machine learning while continuing to grow my software engineering skills. I’m excited to keep exploring Generative AI and agentic systems while building technology that solves meaningful, real-world problems.',
    'Always happy to connect, collaborate, and learn from others!'
  ]
};

export const EDUCATION_DATA: EducationEntry[] = [
  {
    institution: 'San Jose State University',
    degree: 'B.S. Data Science',
    period: 'Expected May 2027',
    location: 'San Jose, CA',
    coursework: [
      'Data Structures and Algorithms',
      'Artificial Intelligence',
      'Computer Systems',
      'Database Management Systems',
      'Object-Oriented Design',
      'Linear Algebra',
      'Discrete Mathematics',
      'Statistical Programming with R',
      'Applied Probability and Statistics',
      'Calculus I & II'
    ]
  }
];
