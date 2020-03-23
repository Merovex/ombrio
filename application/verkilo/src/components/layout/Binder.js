import React, { useContext, useRef, useEffect, useState } from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import SortableTree from 'react-sortable-tree';
import { FaFileMedical } from 'react-icons/fa'

import { useSections } from '../../hooks';
import { BinderItem } from "./BinderItem";

export const Binder = props => {

  const { sections } = useSections('21lMxW5WU1f3fGUVBcrc');

  const [treeData, setTreeData] = useState(sections);
  if(treeData.length != sections.length) {
    setTreeData(sections)
  }
  return (
    <nav className='binder' data-testid='binder'>
    <div>
      <h2>Project Name</h2>
        <div style={{ height: 400 }}>
          <SortableTree
            treeData={treeData}
            onChange={treeData => setTreeData(treeData)}
          />
        </div>
      <h3>Manuscript</h3>
      <ContextMenuTrigger id='binder-context-menu'>
      <div className="projects" data-testid="projects">
            <ul className='sections__list' data-testid='sections'>
              {sections.map(section =>
                <BinderItem section={section} />
                )}
              </ul>
            <h3>Research</h3>
            <h3>Trash</h3>
        </div>
        </ContextMenuTrigger>
    </div>
    <ul>
      <li>
        <span onClick={() => {alert('New File')}}>
          <FaFileMedical />
        </span>
      </li>
    </ul>
    <ContextMenu id="binder-context-menu">
      <MenuItem data={{foo: 'bar'}}
        onClick={() => console.log("HERE")}>
        Add New Text
      </MenuItem>
      <MenuItem data={{foo: 'bar'}}
        onClick={() => console.log("HERE")}>
        trash
      </MenuItem>
    </ContextMenu>
    </nav>

  )
};
// B = Block
// E = Element
// M = Modifier
