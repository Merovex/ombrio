import React, { useState , useContext, useRef } from 'react';
import {  Draggable } from 'react-beautiful-dnd';
import useDoubleClick from 'use-double-click';
import { saveSection, saveProject } from '../../hooks';

import { EditorContext } from '../../context/EditorContext';

export const BinderItem = ({
  refreshBinder,
  project,
  provided,
  item,
  index,
  snapshot
}) => {
  const [ newTitle, setNewTitle ] = useState(item.title);
  const { setActiveSection } = useContext(EditorContext);
  const [ showInput, setShowInput ] = useState(false);

  const spanId = "span-" + item.docId;
  const inputId = "input-" + item.docId;
  const element = useRef();

  const setSelectedSection = sectionId => {
    setActiveSection(sectionId)
  }
  useDoubleClick({
    onSingleClick: e => {
      setSelectedSection(item.docId);
    },
    onDoubleClick: e => {
      setNewTitle(item.title);
      setShowInput(true);
      document.getElementById(inputId).focus();
    },
    ref: element
  });
  const handleInputBlur = (e) => {
    setNewTitle(item.title);
    setShowInput(false);
  }
  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  }
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      project.binder[index] = {...item, title: newTitle.trim()}
      saveSection(project.binder[index]);
      saveProject({...project})
      refreshBinder();
      handleInputBlur();
    }
    if (e.key === 'Escape') {
      handleInputBlur();
    }
  }

  return <Draggable
    key={item.docId}
    draggableId={item.docId}
    index={index}>
    {(provided, snapshot) => (
      <div
        className="draggable"
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <div ref={element}
          onKeyDown={event => handleKeyPress(event)}
          onBlur={event => handleInputBlur()}
          onChange={event => handleTitleChange(event)}
          >
          <span id={spanId}
            className={showInput ? "hidden" : ""}
          >{item.title}</span>
          <input id={inputId}
            className={showInput ? "" : "hidden"}
            type='input' value={newTitle} />
        </div>
      </div>
    )}
  </Draggable>
}
