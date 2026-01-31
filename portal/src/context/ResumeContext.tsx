import { defaultResumeData } from '@/lib/defaultResumeData';
import { ResumeData, ResumeSectionId } from '@/types/resume';
import React, { createContext, useContext, useMemo, useState } from 'react';

type ResumeContextValue = {
  resumeData: ResumeData;
  updateBasics: (field: keyof ResumeData['basics'], value: string) => void;
  updateExperience: (
    id: string,
    field: keyof ResumeData['experience'][number],
    value: string
  ) => void;
  updateExperienceHighlight: (id: string, index: number, value: string) => void;
  addExperienceHighlight: (id: string) => void;
  removeExperienceHighlight: (id: string, index: number) => void;
  updateProject: (
    id: string,
    field: keyof ResumeData['projects'][number],
    value: string
  ) => void;
  updateProjectHighlight: (id: string, index: number, value: string) => void;
  addProjectHighlight: (id: string) => void;
  removeProjectHighlight: (id: string, index: number) => void;
  updateEducation: (
    id: string,
    field: keyof ResumeData['education'][number],
    value: string
  ) => void;
  updateEducationDetail: (id: string, index: number, value: string) => void;
  addEducationDetail: (id: string) => void;
  removeEducationDetail: (id: string, index: number) => void;
  updateSkillGroup: (
    id: string,
    field: keyof ResumeData['skills'][number],
    value: string
  ) => void;
  updateSkillItem: (id: string, index: number, value: string) => void;
  addSkillItem: (id: string) => void;
  removeSkillItem: (id: string, index: number) => void;
  updateCertification: (
    id: string,
    field: keyof ResumeData['certifications'][number],
    value: string
  ) => void;
  toggleSection: (sectionId: ResumeSectionId, enabled: boolean) => void;
};

const ResumeContext = createContext<ResumeContextValue | null>(null);

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
      updateExperience: (id, field, value) => {
        setResumeData((prev) => ({
          ...prev,
          experience: prev.experience.map((item) =>
            item.id === id ? { ...item, [field]: value } : item
          ),
        }));
      },
      updateExperienceHighlight: (id, index, value) => {
        setResumeData((prev) => ({
          ...prev,
          experience: prev.experience.map((item) =>
            item.id === id
              ? {
                  ...item,
                  highlights: updateListItem(item.highlights, index, value),
                }
              : item
          ),
        }));
      },
      addExperienceHighlight: (id) => {
        setResumeData((prev) => ({
          ...prev,
          experience: prev.experience.map((item) =>
            item.id === id
              ? { ...item, highlights: [...item.highlights, 'New highlight'] }
              : item
          ),
        }));
      },
      removeExperienceHighlight: (id, index) => {
        setResumeData((prev) => ({
          ...prev,
          experience: prev.experience.map((item) =>
            item.id === id
              ? {
                  ...item,
                  highlights: item.highlights.filter(
                    (_, itemIndex) => itemIndex !== index
                  ),
                }
              : item
          ),
        }));
      },
      updateProject: (id, field, value) => {
        setResumeData((prev) => ({
          ...prev,
          projects: prev.projects.map((item) =>
            item.id === id ? { ...item, [field]: value } : item
          ),
        }));
      },
      updateProjectHighlight: (id, index, value) => {
        setResumeData((prev) => ({
          ...prev,
          projects: prev.projects.map((item) =>
            item.id === id
              ? {
                  ...item,
                  highlights: updateListItem(item.highlights, index, value),
                }
              : item
          ),
        }));
      },
      addProjectHighlight: (id) => {
        setResumeData((prev) => ({
          ...prev,
          projects: prev.projects.map((item) =>
            item.id === id
              ? { ...item, highlights: [...item.highlights, 'New highlight'] }
              : item
          ),
        }));
      },
      removeProjectHighlight: (id, index) => {
        setResumeData((prev) => ({
          ...prev,
          projects: prev.projects.map((item) =>
            item.id === id
              ? {
                  ...item,
                  highlights: item.highlights.filter(
                    (_, itemIndex) => itemIndex !== index
                  ),
                }
              : item
          ),
        }));
      },
      updateEducation: (id, field, value) => {
        setResumeData((prev) => ({
          ...prev,
          education: prev.education.map((item) =>
            item.id === id ? { ...item, [field]: value } : item
          ),
        }));
      },
      updateEducationDetail: (id, index, value) => {
        setResumeData((prev) => ({
          ...prev,
          education: prev.education.map((item) =>
            item.id === id
              ? {
                  ...item,
                  details: updateListItem(item.details, index, value),
                }
              : item
          ),
        }));
      },
      addEducationDetail: (id) => {
        setResumeData((prev) => ({
          ...prev,
          education: prev.education.map((item) =>
            item.id === id
              ? { ...item, details: [...item.details, 'New detail'] }
              : item
          ),
        }));
      },
      removeEducationDetail: (id, index) => {
        setResumeData((prev) => ({
          ...prev,
          education: prev.education.map((item) =>
            item.id === id
              ? {
                  ...item,
                  details: item.details.filter(
                    (_, itemIndex) => itemIndex !== index
                  ),
                }
              : item
          ),
        }));
      },
      updateSkillGroup: (id, field, value) => {
        setResumeData((prev) => ({
          ...prev,
          skills: prev.skills.map((item) =>
            item.id === id ? { ...item, [field]: value } : item
          ),
        }));
      },
      updateSkillItem: (id, index, value) => {
        setResumeData((prev) => ({
          ...prev,
          skills: prev.skills.map((item) =>
            item.id === id
              ? {
                  ...item,
                  items: updateListItem(item.items, index, value),
                }
              : item
          ),
        }));
      },
      addSkillItem: (id) => {
        setResumeData((prev) => ({
          ...prev,
          skills: prev.skills.map((item) =>
            item.id === id
              ? { ...item, items: [...item.items, 'New skill'] }
              : item
          ),
        }));
      },
      removeSkillItem: (id, index) => {
        setResumeData((prev) => ({
          ...prev,
          skills: prev.skills.map((item) =>
            item.id === id
              ? {
                  ...item,
                  items: item.items.filter(
                    (_, itemIndex) => itemIndex !== index
                  ),
                }
              : item
          ),
        }));
      },
      updateCertification: (id, field, value) => {
        setResumeData((prev) => ({
          ...prev,
          certifications: prev.certifications.map((item) =>
            item.id === id ? { ...item, [field]: value } : item
          ),
        }));
      },
      toggleSection: (sectionId, enabled) => {
        setResumeData((prev) => ({
          ...prev,
          sections: { ...prev.sections, [sectionId]: enabled },
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
