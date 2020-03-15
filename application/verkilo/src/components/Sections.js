import React, { useState, useEffect, useContext } from 'react';
import { useSections, useSection } from '../hooks';
import { EditorContext } from '../context/EditorContext';

export const Sections = ({projectId}) => {
  const {sections} = useSections(projectId)
  const {setActiveSection} = useContext(EditorContext);
  const setSelectedSection = sectionId => {
    setActiveSection(sectionId)
  }
  return (
    <div className="projects" data-testid="projects">
      <ul className='sections__list' data-testid='sections'>
        {sections.map(section =>
          <li key={section.id}
            onClick={() => setSelectedSection(section.id) }
          >
          <span>{section.isActive}//{section.id}//{section.title}</span>
          </li>
        )}
      </ul>
    </div>
  )
}
