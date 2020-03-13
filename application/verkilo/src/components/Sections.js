import React, { useState, useEffect } from 'react';
import {useSections} from '../hooks';
import {BinderSectionItem} from "./BinderSectionItem"

export const Sections = ({projectId}) => {
  const timeout = 2500;
  // const [sectionPopup, setSectionPopup] = useState(false);

  const {sections} = useSections(projectId)
  const sectionOnClick = sectionId => {
    alert(sectionId)
  }
  const sectionOnRightClick = sectionId => {
    alert(sectionId)
  }
  return (
    <div className="projects" data-testid="projects">
      <ul className='sections__list' data-testid='sections'>
        {sections.map(section =>
          <BinderSectionItem section={section} />
        )}
      </ul>
    </div>
  )
}