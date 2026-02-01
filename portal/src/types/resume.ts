export type TemplateId = 'professional' | 'creative' | 'bold' | 'modern';

export type ResumeBasics = {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website: string;
};

export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
};

export type EducationItem = {
  id: string;
  school: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
  details: string[];
};

export type SkillItem = {
  id: string;
  label: string;
  items: string[];
};

export type SectionType = 'experience' | 'education' | 'skills';

export type ExperienceSection = {
  id: string;
  type: 'experience';
  title: string;
  visible: boolean;
  items: ExperienceItem[];
};

export type EducationSection = {
  id: string;
  type: 'education';
  title: string;
  visible: boolean;
  items: EducationItem[];
};

export type SkillsSection = {
  id: string;
  type: 'skills';
  title: string;
  visible: boolean;
  items: SkillItem[];
};

export type ResumeSection = ExperienceSection | EducationSection | SkillsSection;

export type ResumeData = {
  basics: ResumeBasics;
  sections: ResumeSection[];
};
