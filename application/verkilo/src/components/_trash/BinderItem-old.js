import React, { useContext, useRef, useState } from 'react';
import { EditorContext } from '../../context/EditorContext';
import useDoubleClick from 'use-double-click';
import { useSection, saveSection } from '../../hooks';

export const BinderItem = ({section}) => {
  const [ newTitle, setNewTitle ] = useState(section.title);
  const { setActiveSection } = useContext(EditorContext);
  const [ showInput, setShowInput ] = useState(false);
  const setSelectedSection = sectionId => {
    setActiveSection(sectionId)
  }
  const spanId = "span-" + section.id;
  const inputId = "input-" + section.id;
  const itemRef = useRef();

  useDoubleClick({
    onSingleClick: e => {
      setSelectedSection(section.id);
    },
    onDoubleClick: e => {
      console.log(e, 'double click:', section.id);
      setNewTitle(section.title);
      setShowInput(true);
      document.getElementById(inputId).focus();
    },
    ref: itemRef
  });
  const handleInputBlur = (e) => {
    setNewTitle(section.title);
    setShowInput(false);
  }
  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  }
  const handleKeyPress = (e) => {
    // console.log("KEY: ", e.key, e.keyCode);
    if (e.key === 'Enter') {
      saveSection({...section, title: newTitle});
      handleInputBlur();
    }
    if (e.key === 'Escape') {
      handleInputBlur();
    }
  }

  return (
    <li ref={itemRef} key={section.id} >
        <span id={spanId}
          className={showInput ? "hidden" : ""}
        >{section.title}</span>
        <input id={inputId}
          className={showInput ? "" : "hidden"}
          onKeyDown={event => handleKeyPress(event)}
          onBlur={() => handleInputBlur()}
          onChange={event => handleTitleChange(event)}
          type='input' value={newTitle} />
    </li>
  );
}
