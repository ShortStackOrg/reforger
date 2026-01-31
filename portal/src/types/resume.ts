export type ResumeSectionId =
  | 'summary'
  | 'experience'
  | 'projects'
  | 'education'
  | 'skills'
  | 'certifications';

export type TemplateId = 'professional' | 'creative' | 'bold' | 'modern';

export type ResumeBasics = {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  summary: string;
};

export type ResumeExperience = {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
};

export type ResumeProject = {
  id: string;
  name: string;
  description: string;
  highlights: string[];
};

export type ResumeEducation = {
  id: string;
  school: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
  details: string[];
};

export type ResumeSkillGroup = {
  id: string;
  label: string;
  items: string[];
};

export type ResumeCertification = {
  id: string;
  name: string;
  issuer: string;
  year: string;
};

export type ResumeSections = Record<ResumeSectionId, boolean>;

export type ResumeData = {
  basics: ResumeBasics;
  experience: ResumeExperience[];
  projects: ResumeProject[];
  education: ResumeEducation[];
  skills: ResumeSkillGroup[];
  certifications: ResumeCertification[];
  sections: ResumeSections;
};
