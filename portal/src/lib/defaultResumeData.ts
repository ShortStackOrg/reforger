import { ResumeData } from '@/types/resume';

export const defaultResumeData: ResumeData = {
  basics: {
    name: 'Alex Morgan',
    title: 'Product Designer',
    email: 'alex.morgan@email.com',
    phone: '+1 (555) 348-9021',
    location: 'Austin, TX',
    website: 'alexmorgan.design',
    summary:
      'Designs calm, high-performing experiences for SaaS teams. Focused on product strategy, prototyping, and design systems.',
  },
  experience: [
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
  projects: [
    {
      id: 'proj-1',
      name: 'Atlas Mobile',
      description:
        'A personal finance companion for freelancers with automated tax estimates.',
      highlights: [
        'Shipped MVP in 6 weeks with a no-code stack.',
        'Reached 12k MAUs through targeted community outreach.',
      ],
    },
  ],
  education: [
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
  skills: [
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
  certifications: [
    {
      id: 'cert-1',
      name: 'Product Strategy',
      issuer: 'Reforge',
      year: '2022',
    },
  ],
  sections: {
    summary: true,
    experience: true,
    projects: true,
    education: true,
    skills: true,
    certifications: false,
  },
};
