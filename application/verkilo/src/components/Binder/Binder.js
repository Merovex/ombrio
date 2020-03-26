import React, { useState, useContext } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import { FaFileMedical } from 'react-icons/fa';

import { saveProject } from '../../hooks';
import { EditorContext } from "../../context/EditorContext";
import { BinderItem } from "./BinderItem";

export const Binder = () => {
  const { project } = useContext(EditorContext);
  const [items, setItems] = useState(project.binder)
  const [a, setA] = useState(false);
  if (items === undefined && project.binder !== undefined) {
    setItems(project.binder)
  }

  const refreshBinder = () => {
    setA(!a)
    console.log("updated!");
  }

  const onDragEnd = (result) => {
    if (!result.destination) { return; }
    const newItems = [...items]
    const [removed] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, removed);
    project.binder = newItems
    saveProject(project);
    setItems(newItems);
  }

  if (project  === undefined || project.binder === undefined || items === undefined) {
    return (<nav className='binder' data-testid='binder'></nav>);
  }
  return (
    <nav className='binder' data-testid='binder'>
      <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
         <Droppable droppableId="manuscript">
           {(provided, snapshot) => (
             <div
               {...provided.droppableProps}
               ref={provided.innerRef}
               className="droppable"
             >
               <h2>{project.title}</h2>
               <h3>MANUSCRIPT</h3>
               {items.map((item, index) => (
                 <BinderItem
                   refreshBinder={() => refreshBinder()}
                   index={index}
                   item={item}
                   project={project}
                   provided={provided}
                   snapshot={snapshot}
                   />
               ))}
               {provided.placeholder}
             </div>
           )}
         </Droppable>
       </DragDropContext>
    </nav>
  )
};
// B = Block
// E = Element
// M = Modifier
