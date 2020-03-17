import React, { useContext, useRef, useEffect } from 'react';
import { useSections } from '../../hooks';
import { BinderItem } from "./BinderItem";

export const Binder = props => {

  const { sections } = useSections('21lMxW5WU1f3fGUVBcrc')

  
  //
  // const useDoubleClick = () => {
  //   useEffect(() => {
  //     let clickCount = 0;
  //     const handleClick = e => {
  //       clickCount += 1;
  //       setTimeout(() => {
  //         if (clickCount === 1) onSingleClick(e);
  //         else if (clickCount === 2) onDoubleClick(e);
  //         clickCount = 0;
  //       }, 300);
  //     };
  //
  //     handleClick()
  //   });
  // };
  // onClick={() => setSelectedSection(section.id) }
  return (
    <section className='binder' data-testid='binder'>
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
    </section>
  )
};
// B = Block
// E = Element
// M = Modifier
