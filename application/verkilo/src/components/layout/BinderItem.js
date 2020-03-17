import React, { useContext, useRef } from 'react';
import { EditorContext } from '../../context/EditorContext';
import useDoubleClick from 'use-double-click';

export const BinderItem = ({section}) => {

  const { setActiveSection } = useContext(EditorContext);
  const setSelectedSection = sectionId => {
    setActiveSection(sectionId)
  }
  const spanId = "span-" + section.id;
  const inputId = "input-" + section.id;
  const itemRef = useRef();
  const toggleBinderItemInput = () => {
    document.getElementById(spanId).classList.toggle("hidden");
    document.getElementById(inputId).classList.toggle("hidden");
    return true;
  }
  useDoubleClick({
    onSingleClick: e => {
      setSelectedSection(section.id);
    },
    onDoubleClick: e => {
      console.log(e, 'double click:', section.id);
      toggleBinderItemInput();
    },
    ref: itemRef
  });
  return (
    <li ref={itemRef} key={section.id} >
        <span id={spanId} >{section.title}</span>
        <input id={inputId} onDoubleClick={() => toggleBinderItemInput()} className='hidden' type='input' value={section.title} />
    </li>
  );
}
