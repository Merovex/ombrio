import React from 'react';
import {useSections} from '../hooks';

export const Sections = () => {
  // const sections = [];
  const {sections} = useSections('21lMxW5WU1f3fGUVBcrc')
  let projectName = "Project X";
  return (
    <div className="projects" data-testid="projects">
      <h2>{projectName}</h2>
      <ul className='sections__list' data-testid='sections'>
        {sections.map(section => 
          <li key={`section.id`}>
            <span>{section.title}</span>
          </li>
        )}
      </ul>
    </div>
  )
}