
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
    setSelectedSection(sectionId);
    alert(`Bing:` + sectionId)
  }
  return (
    <li key={section.id}
      onClick={() => setSelectedSection(section.id) }
    >
    <span>{section.isActive}//{section.id}//{section.title}</span>
    </li>
  );
}