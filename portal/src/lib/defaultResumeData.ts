import { ResumeData } from '@/types/resume';

export const defaultResumeData: ResumeData = {
  basics: {
    name: 'Alex Morgan',
    title: 'Product Designer',
    email: 'alex.morgan@email.com',
    phone: '+1 (555) 348-9021',
    location: 'Austin, TX',
    website: 'alexmorgan.design',
  },
  sections: [
    {
      id: 'section-exp-1',
      type: 'experience',
      title: 'Experience',
      visible: true,
      items: [
        {
          id: 'exp-1',
          company: 'Northwind Labs',
          role: 'Senior Product Designer',
          location: 'Remote',
          startDate: '2021',
          endDate: 'Present',
          summary:
            'Led the redesign of the billing and onboarding flow for a global analytics platform.',
          highlights: [
            'Reduced onboarding drop-off by 28% with a step-by-step checklist.',
            'Built a tokenized design system across 5 product teams.',
            'Partnered with PMs to roadmap and validate new experiments.',
          ],
        },
      ],
    },
    {
      id: 'section-edu-1',
      type: 'education',
      title: 'Education',
      visible: true,
      items: [
        {
          id: 'edu-1',
          school: 'Savannah College of Art and Design',
          degree: 'B.F.A. in Interactive Design',
          location: 'Savannah, GA',
          startDate: '2014',
          endDate: '2018',
          details: ['Summa Cum Laude', "Dean's List, 6 semesters"],
        },
      ],
    },
    {
      id: 'section-skill-1',
      type: 'skills',
      title: 'Skills',
      visible: true,
      items: [
        {
          id: 'skill-1',
          label: 'Design',
          items: ['Figma', 'Design Systems', 'Prototyping', 'User Research'],
        },
        {
          id: 'skill-2',
          label: 'Product',
          items: ['Roadmapping', 'Workshop Facilitation', 'Usability Testing'],
        },
      ],
    },
  ],
};
