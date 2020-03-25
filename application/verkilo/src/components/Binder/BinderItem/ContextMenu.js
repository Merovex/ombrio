
import React, { useState } from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { firebase } from "../firebase";

export const BinderSectionItem = ({section}) => {
  const setSelectedSection = () => {

  }
  const boing = sectionId => {
    alert("boing:"+ sectionId)
  }
  const bing = sectionId => {
    // setSelectedSection(sectionId);
    alert(`Bing:` + sectionId)
  }
  return (
    <li key={section.id}
      onClick={() => setSelectedSection(section.id) }
    >
    <span>{section.isActive}//{section.id}//{section.title}</span>
      <ContextMenuTrigger id='menu-{section.id}'>
        <span>{section.isActive}//{section.id}//{section.title}</span>
      </ContextMenuTrigger>
      <ContextMenu id="menu-{section.id}">
      <MenuItem data={{foo: 'bar'}}
        onClick={() => boing(section.id)}>
        Add New Text
      </MenuItem>
      <MenuItem data={{foo: 'bar'}}
        onClick={() => boing(section.id)}>
        trash
      </MenuItem>
    </ContextMenu>
    </li>
  );
}
/* <li key={section.id}
              onClick={() => sectionOnClick(section.id) }
              onContextmenu={() => sectionOnRightClick(section.id)}
              className='binder__section'>
            <ContextMenuTrigger id='section-{section.id}'>
              <span>{section.id}{section.id}</span>
            </ContextMenuTrigger>
            <FaEllipsisH />
          </li> */
