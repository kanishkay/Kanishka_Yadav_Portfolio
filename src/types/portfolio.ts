export type SourceStatus = 'verified' | 'needs-review';

export type SourceType =
  | 'repository-file'
  | 'repository-readme'
  | 'supplied-resume'
  | 'user-supplied-description';

export interface SourceReference {
  sourceType: SourceType;
  repositoryUrl?: string;
  filePath?: string;
  sourceLabel?: string;
  supports: string[];
  confirmedExists: boolean;
  symbolOrCell?: string;
}

export interface VerifiedContent {
  sourceStatus: SourceStatus;
  sourceLinks?: string[];
  verifiedClaims?: string[];
  sourceReferences?: SourceReference[];
  needsReviewClaims?: string[];
}

export type ProjectCategory = 'All' | 'AI' | 'Machine Learning' | 'Web' | 'Backend' | 'Data Science';

export interface CodeSnippet {
  language: string;
  filename: string;
  code: string;
  explanation: string;
}

export interface Project extends VerifiedContent {
  id: string;
  title: string;
  tagline: string;
  category: ProjectCategory[];
  featured: boolean;
  heroImage: string;
  description: string;
  problemSolved: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  architectureSummary: string;
  architectureDiagram?: string;
  keyFeatures: string[];
  challenges: string[];
  engineeringDecisions: string[];
  tradeoffs: string[];
  lessonsLearned: string[];
  futureRoadmap: string[];
  codeSnippets?: CodeSnippet[];
  githubUrl?: string;
  liveUrl?: string;
  blogSlug?: string;
  demoVideoUrl?: string;
}

export type ExperienceCategory = 'All' | 'Internships' | 'Leadership';

export interface ExperienceItem extends VerifiedContent {
  id: string;
  role: string;
  companyOrOrg: string;
  location: string;
  period: string;
  category: ExperienceCategory;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  impactMetrics?: { label: string; value: string }[];
  logoIcon?: string;
}

export interface SkillCategory {
  title: string;
  categoryKey: 'languages' | 'ai_ml' | 'backend_web' | 'databases' | 'infra_tools';
  description: string;
  skills: string[];
}

export interface EducationItem extends VerifiedContent {
  institution: string;
  degree: string;
  major: string;
  period: string;
  gpa: string;
  location: string;
  relevantCoursework: string[];
  honors?: string[];
  extracurriculars?: string[];
}

export interface BlogPost extends VerifiedContent {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: 'AI' | 'Machine Learning' | 'Data Science' | 'Software Engineering' | 'Technical Writing';
  publishDate: string;
  readTime: string;
  tags: string[];
  contentMDX: string;
  featuredCode?: CodeSnippet;
}
