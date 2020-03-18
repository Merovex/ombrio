import React, { useContext, useRef, useEffect } from 'react';
import { useSections } from '../../hooks';
import { BinderItem } from "./BinderItem";

export const Binder = props => {

  const { sections } = useSections('21lMxW5WU1f3fGUVBcrc')

  return (
    <nav className='binder' data-testid='binder'>
      <h2>Project Name</h2>
      <h3>Manuscript</h3>
      <div className="projects" data-testid="projects">
        <ul className='sections__list' data-testid='sections'>
          {sections.map(section =>
            <BinderItem section={section} />
          )}
        </ul>
      </div>
      <h3>Research</h3>
      <h3>Trash</h3>
    </nav>
  )
};
// B = Block
// E = Element
// M = Modifier
