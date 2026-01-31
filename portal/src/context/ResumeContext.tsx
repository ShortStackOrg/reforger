"use client";

import { defaultResumeData } from '@/lib/defaultResumeData';
import {
  EducationItem,
  ExperienceItem,
  ResumeData,
  ResumeSection,
  SectionType,
  SkillItem,
} from '@/types/resume';
import React, { createContext, useContext, useMemo, useState } from 'react';

type ResumeContextValue = {
  resumeData: ResumeData;
  updateBasics: (field: keyof ResumeData['basics'], value: string) => void;
  addSection: (type: SectionType) => void;
  removeSection: (sectionId: string) => void;
  moveSection: (sectionId: string, direction: 'up' | 'down') => void;
  toggleSectionVisibility: (sectionId: string) => void;
  updateSectionTitle: (sectionId: string, title: string) => void;
  addItem: (sectionId: string) => void;
  removeItem: (sectionId: string, itemId: string) => void;
  updateExperienceItem: (
    sectionId: string,
    itemId: string,
    field: keyof ExperienceItem,
    value: string
  ) => void;
  updateEducationItem: (
    sectionId: string,
    itemId: string,
    field: keyof EducationItem,
    value: string
  ) => void;
  updateSkillItem: (
    sectionId: string,
    itemId: string,
    field: keyof SkillItem,
    value: string
  ) => void;
  updateExperienceHighlight: (
    sectionId: string,
    itemId: string,
    index: number,
    value: string
  ) => void;
  addExperienceHighlight: (sectionId: string, itemId: string) => void;
  removeExperienceHighlight: (
    sectionId: string,
    itemId: string,
    index: number
  ) => void;
  updateEducationDetail: (
    sectionId: string,
    itemId: string,
    index: number,
    value: string
  ) => void;
  addEducationDetail: (sectionId: string, itemId: string) => void;
  removeEducationDetail: (
    sectionId: string,
    itemId: string,
    index: number
  ) => void;
  updateSkillEntry: (
    sectionId: string,
    itemId: string,
    index: number,
    value: string
  ) => void;
  addSkillEntry: (sectionId: string, itemId: string) => void;
  removeSkillEntry: (
    sectionId: string,
    itemId: string,
    index: number
  ) => void;
};

const ResumeContext = createContext<ResumeContextValue | null>(null);

const createId = (prefix: string) => {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return `${prefix}-${crypto.randomUUID()}`;
  }
  return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
};

const createExperienceItem = (): ExperienceItem => ({
  id: createId('exp'),
  company: '',
  role: '',
  location: '',
  startDate: '',
  endDate: '',
  summary: '',
  highlights: [''],
});

const createEducationItem = (): EducationItem => ({
  id: createId('edu'),
  school: '',
  degree: '',
  location: '',
  startDate: '',
  endDate: '',
  details: [''],
});

const createSkillItem = (): SkillItem => ({
  id: createId('skill'),
  label: '',
  items: [''],
});

const createSection = (type: SectionType): ResumeSection => {
  switch (type) {
    case 'experience':
      return {
        id: createId('section-exp'),
        type: 'experience',
        title: 'Experience',
        visible: true,
        items: [createExperienceItem()],
      };
    case 'education':
      return {
        id: createId('section-edu'),
        type: 'education',
        title: 'Education',
        visible: true,
        items: [createEducationItem()],
      };
    case 'skills':
    default:
      return {
        id: createId('section-skill'),
        type: 'skills',
        title: 'Skills',
        visible: true,
        items: [createSkillItem()],
      };
  }
};

const updateListItem = (items: string[], index: number, value: string) =>
  items.map((item, itemIndex) => (itemIndex === index ? value : item));

export const ResumeProvider = ({
  children,
  initialData = defaultResumeData,
}: {
  children: React.ReactNode;
  initialData?: ResumeData;
}) => {
  const [resumeData, setResumeData] = useState<ResumeData>(initialData);

  const value = useMemo<ResumeContextValue>(
    () => ({
      resumeData,
      updateBasics: (field, value) => {
        setResumeData((prev) => ({
          ...prev,
          basics: { ...prev.basics, [field]: value },
        }));
      },
      addSection: (type) => {
        setResumeData((prev) => ({
          ...prev,
          sections: [...prev.sections, createSection(type)],
        }));
      },
      removeSection: (sectionId) => {
        setResumeData((prev) => ({
          ...prev,
          sections: prev.sections.filter((section) => section.id !== sectionId),
        }));
      },
      moveSection: (sectionId, direction) => {
        setResumeData((prev) => {
          const index = prev.sections.findIndex(
            (section) => section.id === sectionId
          );
          if (index === -1) {
            return prev;
          }
          const nextIndex = direction === 'up' ? index - 1 : index + 1;
          if (nextIndex < 0 || nextIndex >= prev.sections.length) {
            return prev;
          }
          const nextSections = [...prev.sections];
          const [removed] = nextSections.splice(index, 1);
          nextSections.splice(nextIndex, 0, removed);
          return { ...prev, sections: nextSections };
        });
      },
      toggleSectionVisibility: (sectionId) => {
        setResumeData((prev) => ({
          ...prev,
          sections: prev.sections.map((section) =>
            section.id === sectionId
              ? { ...section, visible: !section.visible }
              : section
          ),
        }));
      },
      updateSectionTitle: (sectionId, title) => {
        setResumeData((prev) => ({
          ...prev,
          sections: prev.sections.map((section) =>
            section.id === sectionId ? { ...section, title } : section
          ),
        }));
      },
      addItem: (sectionId) => {
        setResumeData((prev) => ({
          ...prev,
          sections: prev.sections.map((section) => {
            if (section.id !== sectionId) {
              return section;
            }
            if (section.type === 'experience') {
              return {
                ...section,
                items: [...section.items, createExperienceItem()],
              };
            }
            if (section.type === 'education') {
              return {
                ...section,
                items: [...section.items, createEducationItem()],
              };
            }
            return { ...section, items: [...section.items, createSkillItem()] };
          }),
        }));
      },
      removeItem: (sectionId, itemId) => {
        setResumeData((prev) => ({
          ...prev,
          sections: prev.sections.map((section) => {
            if (section.id !== sectionId) {
              return section;
            }
            return {
              ...section,
              items: section.items.filter((item) => item.id !== itemId),
            };
          }),
        }));
      },
      updateExperienceItem: (sectionId, itemId, field, value) => {
        setResumeData((prev) => ({
          ...prev,
          sections: prev.sections.map((section) => {
            if (section.id !== sectionId || section.type !== 'experience') {
              return section;
            }
            return {
              ...section,
              items: section.items.map((item) =>
                item.id === itemId ? { ...item, [field]: value } : item
              ),
            };
          }),
        }));
      },
      updateEducationItem: (sectionId, itemId, field, value) => {
        setResumeData((prev) => ({
          ...prev,
          sections: prev.sections.map((section) => {
            if (section.id !== sectionId || section.type !== 'education') {
              return section;
            }
            return {
              ...section,
              items: section.items.map((item) =>
                item.id === itemId ? { ...item, [field]: value } : item
              ),
            };
          }),
        }));
      },
      updateSkillItem: (sectionId, itemId, field, value) => {
        setResumeData((prev) => ({
          ...prev,
          sections: prev.sections.map((section) => {
            if (section.id !== sectionId || section.type !== 'skills') {
              return section;
            }
            return {
              ...section,
              items: section.items.map((item) =>
                item.id === itemId ? { ...item, [field]: value } : item
              ),
            };
          }),
        }));
      },
      updateExperienceHighlight: (sectionId, itemId, index, value) => {
        setResumeData((prev) => ({
          ...prev,
          sections: prev.sections.map((section) => {
            if (section.id !== sectionId || section.type !== 'experience') {
              return section;
            }
            return {
              ...section,
              items: section.items.map((item) =>
                item.id === itemId
                  ? {
                      ...item,
                      highlights: updateListItem(item.highlights, index, value),
                    }
                  : item
              ),
            };
          }),
        }));
      },
      addExperienceHighlight: (sectionId, itemId) => {
        setResumeData((prev) => ({
          ...prev,
          sections: prev.sections.map((section) => {
            if (section.id !== sectionId || section.type !== 'experience') {
              return section;
            }
            return {
              ...section,
              items: section.items.map((item) =>
                item.id === itemId
                  ? { ...item, highlights: [...item.highlights, ''] }
                  : item
              ),
            };
          }),
        }));
      },
      removeExperienceHighlight: (sectionId, itemId, index) => {
        setResumeData((prev) => ({
          ...prev,
          sections: prev.sections.map((section) => {
            if (section.id !== sectionId || section.type !== 'experience') {
              return section;
            }
            return {
              ...section,
              items: section.items.map((item) =>
                item.id === itemId
                  ? {
                      ...item,
                      highlights: item.highlights.filter(
                        (_, itemIndex) => itemIndex !== index
                      ),
                    }
                  : item
              ),
            };
          }),
        }));
      },
      updateEducationDetail: (sectionId, itemId, index, value) => {
        setResumeData((prev) => ({
          ...prev,
          sections: prev.sections.map((section) => {
            if (section.id !== sectionId || section.type !== 'education') {
              return section;
            }
            return {
              ...section,
              items: section.items.map((item) =>
                item.id === itemId
                  ? {
                      ...item,
                      details: updateListItem(item.details, index, value),
                    }
                  : item
              ),
            };
          }),
        }));
      },
      addEducationDetail: (sectionId, itemId) => {
        setResumeData((prev) => ({
          ...prev,
          sections: prev.sections.map((section) => {
            if (section.id !== sectionId || section.type !== 'education') {
              return section;
            }
            return {
              ...section,
              items: section.items.map((item) =>
                item.id === itemId
                  ? { ...item, details: [...item.details, ''] }
                  : item
              ),
            };
          }),
        }));
      },
      removeEducationDetail: (sectionId, itemId, index) => {
        setResumeData((prev) => ({
          ...prev,
          sections: prev.sections.map((section) => {
            if (section.id !== sectionId || section.type !== 'education') {
              return section;
            }
            return {
              ...section,
              items: section.items.map((item) =>
                item.id === itemId
                  ? {
                      ...item,
                      details: item.details.filter(
                        (_, itemIndex) => itemIndex !== index
                      ),
                    }
                  : item
              ),
            };
          }),
        }));
      },
      updateSkillEntry: (sectionId, itemId, index, value) => {
        setResumeData((prev) => ({
          ...prev,
          sections: prev.sections.map((section) => {
            if (section.id !== sectionId || section.type !== 'skills') {
              return section;
            }
            return {
              ...section,
              items: section.items.map((item) =>
                item.id === itemId
                  ? {
                      ...item,
                      items: updateListItem(item.items, index, value),
                    }
                  : item
              ),
            };
          }),
        }));
      },
      addSkillEntry: (sectionId, itemId) => {
        setResumeData((prev) => ({
          ...prev,
          sections: prev.sections.map((section) => {
            if (section.id !== sectionId || section.type !== 'skills') {
              return section;
            }
            return {
              ...section,
              items: section.items.map((item) =>
                item.id === itemId
                  ? { ...item, items: [...item.items, ''] }
                  : item
              ),
            };
          }),
        }));
      },
      removeSkillEntry: (sectionId, itemId, index) => {
        setResumeData((prev) => ({
          ...prev,
          sections: prev.sections.map((section) => {
            if (section.id !== sectionId || section.type !== 'skills') {
              return section;
            }
            return {
              ...section,
              items: section.items.map((item) =>
                item.id === itemId
                  ? {
                      ...item,
                      items: item.items.filter(
                        (_, itemIndex) => itemIndex !== index
                      ),
                    }
                  : item
              ),
            };
          }),
        }));
      },
    }),
    [resumeData]
  );

  return (
    <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>
  );
};

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
};
