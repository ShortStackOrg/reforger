"use client";

import EditableList from '@/components/reforger/editor/EditableList';
import EditableText from '@/components/reforger/editor/EditableText';
import ItemWrapper from '@/components/reforger/editor/ItemWrapper';
import SectionWrapper from '@/components/reforger/editor/SectionWrapper';
import { useResume } from '@/context/ResumeContext';

const ModernTemplate = () => {
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
    <div className="flex h-full w-full flex-col gap-8 bg-white px-10 py-12 text-slate-900">
      <header className="flex flex-wrap items-start justify-between gap-6">
        <div className="space-y-2">
          <EditableText
            value={basics.name}
            onChange={(value) => updateBasics('name', value)}
            className="text-3xl font-display font-semibold tracking-tight"
            placeholder="Your name"
          />
          <EditableText
            value={basics.title}
            onChange={(value) => updateBasics('title', value)}
            className="text-sm uppercase tracking-[0.35em] text-emerald-700"
            placeholder="Title"
          />
        </div>
        <div className="grid gap-1 text-xs text-slate-500">
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
      </header>

      <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          {sections.map((section) => {
            if (!section.visible || section.type !== 'experience') {
              return null;
            }
            return (
              <SectionWrapper
                key={section.id}
                title={section.title}
                onTitleChange={(value) => updateSectionTitle(section.id, value)}
                onAddItem={() => addItem(section.id)}
                headingClassName="text-emerald-700"
              >
                <div className="space-y-6">
                  {section.items.map((item) => (
                    <ItemWrapper
                      key={item.id}
                      onRemove={() => removeItem(section.id, item.id)}
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <div className="space-y-1">
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
                            className="text-xs uppercase tracking-[0.2em] text-slate-500"
                            placeholder="Company"
                          />
                        </div>
                        <div className="text-xs text-slate-500">
                          <div className="flex items-center justify-end gap-2">
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
          })}
        </div>

        <div className="space-y-8">
          {sections.map((section) => {
            if (!section.visible) {
              return null;
            }
            if (section.type === 'education') {
              return (
                <SectionWrapper
                  key={section.id}
                  title={section.title}
                  onTitleChange={(value) => updateSectionTitle(section.id, value)}
                  onAddItem={() => addItem(section.id)}
                  headingClassName="text-emerald-700"
                >
                  <div className="space-y-5">
                    {section.items.map((item) => (
                      <ItemWrapper
                        key={item.id}
                        onRemove={() => removeItem(section.id, item.id)}
                      >
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
                          className="text-xs uppercase tracking-[0.2em] text-slate-500"
                          placeholder="Degree"
                        />
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
                          className="text-xs text-slate-500"
                          placeholder="Location"
                        />
                        <div className="flex items-center gap-2 text-xs text-slate-500">
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
            if (section.type === 'skills') {
              return (
                <SectionWrapper
                  key={section.id}
                  title={section.title}
                  onTitleChange={(value) => updateSectionTitle(section.id, value)}
                  onAddItem={() => addItem(section.id)}
                  headingClassName="text-emerald-700"
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
                            updateSkillItem(
                              section.id,
                              item.id,
                              'label',
                              value
                            )
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
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default ModernTemplate;
