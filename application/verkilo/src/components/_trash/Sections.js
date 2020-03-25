import React, { useContext } from 'react';
import { useSections } from '../hooks';
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
          <BinderItem section={section} />
        )}
      </ul>
    </div>
  )
}
