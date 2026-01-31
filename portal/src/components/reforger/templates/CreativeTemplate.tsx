"use client";

import EditableList from '@/components/reforger/editor/EditableList';
import EditableText from '@/components/reforger/editor/EditableText';
import SectionWrapper from '@/components/reforger/editor/SectionWrapper';
import { useResume } from '@/context/ResumeContext';

const CreativeTemplate = () => {
  const {
    resumeData,
    updateBasics,
    updateExperience,
    updateExperienceHighlight,
    addExperienceHighlight,
    removeExperienceHighlight,
    updateProject,
    updateProjectHighlight,
    addProjectHighlight,
    removeProjectHighlight,
    updateEducation,
    updateEducationDetail,
    addEducationDetail,
    removeEducationDetail,
    updateSkillGroup,
    updateSkillItem,
    addSkillItem,
    removeSkillItem,
  } = useResume();

  const { basics, experience, projects, education, skills, sections } = resumeData;

  return (
    <div className="grid h-full w-full grid-cols-[220px_1fr] bg-white text-slate-900">
      <aside className="flex flex-col gap-6 bg-amber-50 px-6 py-10">
        <div className="space-y-2">
          <EditableText
            value={basics.name}
            onChange={(value) => updateBasics('name', value)}
            className="text-2xl font-display font-semibold leading-tight"
            placeholder="Your name"
          />
          <EditableText
            value={basics.title}
            onChange={(value) => updateBasics('title', value)}
            className="text-xs uppercase tracking-[0.3em] text-amber-700"
            placeholder="Title"
          />
        </div>

        <div className="space-y-1 text-xs text-slate-600">
          <EditableText
            value={basics.email}
            onChange={(value) => updateBasics('email', value)}
            placeholder="Email"
          />
          <EditableText
            value={basics.phone}
            onChange={(value) => updateBasics('phone', value)}
            placeholder="Phone"
          />
          <EditableText
            value={basics.location}
            onChange={(value) => updateBasics('location', value)}
            placeholder="Location"
          />
          <EditableText
            value={basics.website}
            onChange={(value) => updateBasics('website', value)}
            placeholder="Website"
          />
        </div>

        {sections.skills ? (
          <SectionWrapper title="Skills" headingClassName="text-amber-700">
            <div className="space-y-4">
              {skills.map((group) => (
                <div key={group.id} className="space-y-2">
                  <EditableText
                    value={group.label}
                    onChange={(value) =>
                      updateSkillGroup(group.id, 'label', value)
                    }
                    className="text-[11px] uppercase tracking-[0.25em] text-slate-500"
                    placeholder="Category"
                  />
                  <EditableList
                    items={group.items}
                    onChange={(index, value) =>
                      updateSkillItem(group.id, index, value)
                    }
                    onAdd={() => addSkillItem(group.id)}
                    onRemove={(index) => removeSkillItem(group.id, index)}
                    itemClassName="text-sm text-slate-700"
                  />
                </div>
              ))}
            </div>
          </SectionWrapper>
        ) : null}
      </aside>

      <main className="flex flex-col gap-8 px-10 py-12">
        {sections.summary ? (
          <EditableText
            value={basics.summary}
            onChange={(value) => updateBasics('summary', value)}
            className="text-sm leading-relaxed text-slate-600"
            placeholder="Add a short summary"
            multiline
          />
        ) : null}

        {sections.experience ? (
          <SectionWrapper title="Experience" headingClassName="text-amber-700">
            <div className="space-y-6">
              {experience.map((item) => (
                <div key={item.id} className="space-y-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div className="space-y-1">
                      <EditableText
                        value={item.role}
                        onChange={(value) =>
                          updateExperience(item.id, 'role', value)
                        }
                        className="text-sm font-semibold"
                        placeholder="Role"
                      />
                      <EditableText
                        value={item.company}
                        onChange={(value) =>
                          updateExperience(item.id, 'company', value)
                        }
                        className="text-xs uppercase tracking-[0.2em] text-slate-500"
                        placeholder="Company"
                      />
                    </div>
                    <div className="text-xs text-slate-500">
                      <div className="flex items-center justify-end gap-2">
                        <EditableText
                          value={item.startDate}
                          onChange={(value) =>
                            updateExperience(item.id, 'startDate', value)
                          }
                          placeholder="Start"
                        />
                        <span className="text-slate-400">-</span>
                        <EditableText
                          value={item.endDate}
                          onChange={(value) =>
                            updateExperience(item.id, 'endDate', value)
                          }
                          placeholder="End"
                        />
                      </div>
                      <EditableText
                        value={item.location}
                        onChange={(value) =>
                          updateExperience(item.id, 'location', value)
                        }
                        placeholder="Location"
                      />
                    </div>
                  </div>
                  <EditableText
                    value={item.summary}
                    onChange={(value) =>
                      updateExperience(item.id, 'summary', value)
                    }
                    className="text-sm text-slate-600"
                    placeholder="Role summary"
                    multiline
                  />
                  <EditableList
                    items={item.highlights}
                    onChange={(index, value) =>
                      updateExperienceHighlight(item.id, index, value)
                    }
                    onAdd={() => addExperienceHighlight(item.id)}
                    onRemove={(index) =>
                      removeExperienceHighlight(item.id, index)
                    }
                    itemClassName="text-sm text-slate-700"
                  />
                </div>
              ))}
            </div>
          </SectionWrapper>
        ) : null}

        {sections.projects ? (
          <SectionWrapper title="Projects" headingClassName="text-amber-700">
            <div className="space-y-5">
              {projects.map((project) => (
                <div key={project.id} className="space-y-2">
                  <EditableText
                    value={project.name}
                    onChange={(value) =>
                      updateProject(project.id, 'name', value)
                    }
                    className="text-sm font-semibold"
                    placeholder="Project name"
                  />
                  <EditableText
                    value={project.description}
                    onChange={(value) =>
                      updateProject(project.id, 'description', value)
                    }
                    className="text-sm text-slate-600"
                    placeholder="Project description"
                    multiline
                  />
                  <EditableList
                    items={project.highlights}
                    onChange={(index, value) =>
                      updateProjectHighlight(project.id, index, value)
                    }
                    onAdd={() => addProjectHighlight(project.id)}
                    onRemove={(index) => removeProjectHighlight(project.id, index)}
                    itemClassName="text-sm text-slate-700"
                  />
                </div>
              ))}
            </div>
          </SectionWrapper>
        ) : null}

        {sections.education ? (
          <SectionWrapper title="Education" headingClassName="text-amber-700">
            <div className="space-y-5">
              {education.map((item) => (
                <div key={item.id} className="space-y-2">
                  <EditableText
                    value={item.school}
                    onChange={(value) =>
                      updateEducation(item.id, 'school', value)
                    }
                    className="text-sm font-semibold"
                    placeholder="School"
                  />
                  <EditableText
                    value={item.degree}
                    onChange={(value) =>
                      updateEducation(item.id, 'degree', value)
                    }
                    className="text-xs uppercase tracking-[0.2em] text-slate-500"
                    placeholder="Degree"
                  />
                  <EditableText
                    value={item.location}
                    onChange={(value) =>
                      updateEducation(item.id, 'location', value)
                    }
                    className="text-xs text-slate-500"
                    placeholder="Location"
                  />
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <EditableText
                      value={item.startDate}
                      onChange={(value) =>
                        updateEducation(item.id, 'startDate', value)
                      }
                      placeholder="Start"
                    />
                    <span className="text-slate-400">-</span>
                    <EditableText
                      value={item.endDate}
                      onChange={(value) =>
                        updateEducation(item.id, 'endDate', value)
                      }
                      placeholder="End"
                    />
                  </div>
                  <EditableList
                    items={item.details}
                    onChange={(index, value) =>
                      updateEducationDetail(item.id, index, value)
                    }
                    onAdd={() => addEducationDetail(item.id)}
                    onRemove={(index) =>
                      removeEducationDetail(item.id, index)
                    }
                    itemClassName="text-sm text-slate-700"
                  />
                </div>
              ))}
            </div>
          </SectionWrapper>
        ) : null}
      </main>
    </div>
  );
};

export default CreativeTemplate;
