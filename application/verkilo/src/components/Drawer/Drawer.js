import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import { Button, Icon, Table, Flag, Ref } from 'semantic-ui-react'
// import { FaFileMedical } from 'react-icons/fa';
// import { useSections } from '../../hooks';
import { useProject, saveProject } from '../../hooks';
// import { EditorContext } from '../../context/EditorContext';

// import { Binder } from "./Binder";
import { BinderItem } from "./BinderItem";

export const Drawer = ({activeProjectId}) => {
  const { project } = useProject(activeProjectId);
  const [items, setItems] = useState(project.binder)
  if (items === undefined && project.binder !== undefined) {
    setItems(project.binder)
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
               <h3>Manuscript</h3>
               {items.map((item, index) => (
                 <BinderItem
                   index={index}
                   item={item}
                   provided={provided}
                   snapshot={snapshot}
                   />
               ))}
               {provided.placeholder}
             </div>
           )}
         </Droppable>
         <Droppable droppableId="notebook">
           {(provided, snapshot) => (
             <div
               {...provided.droppableProps}
               ref={provided.innerRef}
               className="droppable"
             >
             <h3>Notebook</h3>
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
