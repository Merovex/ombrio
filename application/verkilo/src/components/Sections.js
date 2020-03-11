import React from 'react';
import {useSections} from '../hooks';

export const Sections = ({projectId}) => {
  const {sections} = useSections(projectId)
  return (
    <div className="projects" data-testid="projects">
      <ul className='sections__list' data-testid='sections'>
        {sections.map(section => 
          <li key={`section.id`} className='binder__section'>
            <span>{section.title}</span>
          </li>
        )}
      </ul>
    </div>
  )
}