"use client";

import EditableList from '@/components/reforger/editor/EditableList';
import EditableText from '@/components/reforger/editor/EditableText';
import ItemWrapper from '@/components/reforger/editor/ItemWrapper';
import SectionWrapper from '@/components/reforger/editor/SectionWrapper';
import { useResume } from '@/context/ResumeContext';

const BoldTemplate = () => {
  const {
    resumeData,
    updateBasics,
    updateSectionTitle,
    addItem,
    removeItem,
    updateExperienceItem,
    updateExperienceHighlight,
    addExperienceHighlight,
    removeExperienceHighlight,
    updateEducationItem,
    updateEducationDetail,
    addEducationDetail,
    removeEducationDetail,
    updateSkillItem,
    updateSkillEntry,
    addSkillEntry,
    removeSkillEntry,
  } = useResume();

  const { basics, sections } = resumeData;

  return (
    <div className="relative min-h-full w-full bg-white text-slate-900">
      <div className="absolute left-0 top-0 h-full w-3 bg-slate-900" />
      <div className="flex flex-col gap-8 px-12 py-12">
        <header className="space-y-4">
          <EditableText
            value={basics.name}
            onChange={(value) => updateBasics('name', value)}
            className="text-4xl font-display font-semibold tracking-tight"
            placeholder="Your name"
          />
          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-slate-500">
            <EditableText
              value={basics.title}
              onChange={(value) => updateBasics('title', value)}
              placeholder="Title"
            />
            <span className="text-slate-300">|</span>
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
          </div>
        </header>

        {sections.map((section) => {
          if (!section.visible) {
            return null;
          }

          if (section.type === 'experience') {
            return (
              <SectionWrapper
                key={section.id}
                title={section.title}
                onTitleChange={(value) => updateSectionTitle(section.id, value)}
                onAddItem={() => addItem(section.id)}
                headingClassName="text-slate-800"
              >
                <div className="space-y-6">
                  {section.items.map((item) => (
                    <ItemWrapper
                      key={item.id}
                      onRemove={() => removeItem(section.id, item.id)}
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <div className="min-w-0 flex-1 space-y-1">
                          <EditableText
                            value={item.role}
                            onChange={(value) =>
                              updateExperienceItem(
                                section.id,
                                item.id,
                                'role',
                                value
                              )
                            }
                            className="text-sm font-semibold"
                            placeholder="Role"
                          />
                          <EditableText
                            value={item.company}
                            onChange={(value) =>
                              updateExperienceItem(
                                section.id,
                                item.id,
                                'company',
                                value
                              )
                            }
                            className="w-full text-xs uppercase tracking-[0.2em] text-slate-500"
                            placeholder="Company"
                          />
                        </div>
                        <div className="min-w-[140px] text-xs text-slate-500 text-right">
                          <div className="flex flex-wrap items-center justify-end gap-2">
                            <EditableText
                              value={item.startDate}
                              onChange={(value) =>
                                updateExperienceItem(
                                  section.id,
                                  item.id,
                                  'startDate',
                                  value
                                )
                              }
                              placeholder="Start"
                            />
                            <span className="text-slate-400">-</span>
                            <EditableText
                              value={item.endDate}
                              onChange={(value) =>
                                updateExperienceItem(
                                  section.id,
                                  item.id,
                                  'endDate',
                                  value
                                )
                              }
                              placeholder="End"
                            />
                          </div>
                          <EditableText
                            value={item.location}
                            onChange={(value) =>
                              updateExperienceItem(
                                section.id,
                                item.id,
                                'location',
                                value
                              )
                            }
                            placeholder="Location"
                          />
                        </div>
                      </div>
                      <EditableText
                        value={item.summary}
                        onChange={(value) =>
                          updateExperienceItem(
                            section.id,
                            item.id,
                            'summary',
                            value
                          )
                        }
                        className="text-sm text-slate-600"
                        placeholder="Role summary"
                        multiline
                      />
                      <EditableList
                        items={item.highlights}
                        onChange={(index, value) =>
                          updateExperienceHighlight(
                            section.id,
                            item.id,
                            index,
                            value
                          )
                        }
                        onAdd={() => addExperienceHighlight(section.id, item.id)}
                        onRemove={(index) =>
                          removeExperienceHighlight(section.id, item.id, index)
                        }
                        itemClassName="text-sm text-slate-700"
                      />
                    </ItemWrapper>
                  ))}
                </div>
              </SectionWrapper>
            );
          }

          if (section.type === 'education') {
            return (
              <SectionWrapper
                key={section.id}
                title={section.title}
                onTitleChange={(value) => updateSectionTitle(section.id, value)}
                onAddItem={() => addItem(section.id)}
                headingClassName="text-slate-800"
              >
                <div className="space-y-5">
                  {section.items.map((item) => (
                    <ItemWrapper
                      key={item.id}
                      onRemove={() => removeItem(section.id, item.id)}
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <div className="min-w-0 flex-1 space-y-1">
                          <EditableText
                            value={item.school}
                            onChange={(value) =>
                              updateEducationItem(
                                section.id,
                                item.id,
                                'school',
                                value
                              )
                            }
                            className="text-sm font-semibold"
                            placeholder="School"
                          />
                          <EditableText
                            value={item.degree}
                            onChange={(value) =>
                              updateEducationItem(
                                section.id,
                                item.id,
                                'degree',
                                value
                              )
                            }
                            className="w-full text-xs uppercase tracking-[0.2em] text-slate-500"
                            placeholder="Degree"
                          />
                        </div>
                        <div className="min-w-[140px] text-xs text-slate-500 text-right">
                          <div className="flex flex-wrap items-center justify-end gap-2">
                            <EditableText
                              value={item.startDate}
                              onChange={(value) =>
                                updateEducationItem(
                                  section.id,
                                  item.id,
                                  'startDate',
                                  value
                                )
                              }
                              placeholder="Start"
                            />
                            <span className="text-slate-400">-</span>
                            <EditableText
                              value={item.endDate}
                              onChange={(value) =>
                                updateEducationItem(
                                  section.id,
                                  item.id,
                                  'endDate',
                                  value
                                )
                              }
                              placeholder="End"
                            />
                          </div>
                          <EditableText
                            value={item.location}
                            onChange={(value) =>
                              updateEducationItem(
                                section.id,
                                item.id,
                                'location',
                                value
                              )
                            }
                            placeholder="Location"
                          />
                        </div>
                      </div>
                      <EditableList
                        items={item.details}
                        onChange={(index, value) =>
                          updateEducationDetail(
                            section.id,
                            item.id,
                            index,
                            value
                          )
                        }
                        onAdd={() => addEducationDetail(section.id, item.id)}
                        onRemove={(index) =>
                          removeEducationDetail(section.id, item.id, index)
                        }
                        itemClassName="text-sm text-slate-700"
                      />
                    </ItemWrapper>
                  ))}
                </div>
              </SectionWrapper>
            );
          }

          return (
            <SectionWrapper
              key={section.id}
              title={section.title}
              onTitleChange={(value) => updateSectionTitle(section.id, value)}
              onAddItem={() => addItem(section.id)}
              headingClassName="text-slate-800"
            >
              <div className="space-y-4">
                {section.items.map((item) => (
                  <ItemWrapper
                    key={item.id}
                    onRemove={() => removeItem(section.id, item.id)}
                  >
                    <EditableText
                      value={item.label}
                      onChange={(value) =>
                        updateSkillItem(section.id, item.id, 'label', value)
                      }
                      className="text-xs uppercase tracking-[0.2em] text-slate-500"
                      placeholder="Category"
                    />
                    <EditableList
                      items={item.items}
                      onChange={(index, value) =>
                        updateSkillEntry(section.id, item.id, index, value)
                      }
                      onAdd={() => addSkillEntry(section.id, item.id)}
                      onRemove={(index) =>
                        removeSkillEntry(section.id, item.id, index)
                      }
                      itemClassName="text-sm text-slate-700"
                    />
                  </ItemWrapper>
                ))}
              </div>
            </SectionWrapper>
          );
        })}
      </div>
    </div>
  );
};

export default BoldTemplate;
