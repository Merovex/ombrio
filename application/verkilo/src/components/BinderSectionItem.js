
import React from 'react';
import {FaEllipsisH} from 'react-icons/fa';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

export const BinderSectionItem = ({section}) => {
  console.log(section)
  const boing = sectionId => {
    alert("HERE: {sectionId}")
  }
  const makeBinderSectionItemActive = sectionId => {
    alert(sectionId)
  }
  return (
    <li key={section.id}
      onClick={() => makeBinderSectionItemActive(section.id)}
    >
      <ContextMenuTrigger id='menu-{section.id}'>    
        <span>{section.title}</span>
      </ContextMenuTrigger>
      <ContextMenu id="menu-{section.id}">
      <MenuItem data={{foo: 'bar'}} onClick={() => boing(section.id)}>
        rename
      </MenuItem>
      <MenuItem data={{foo: 'bar'}} onClick={() => boing(section.id)}>
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