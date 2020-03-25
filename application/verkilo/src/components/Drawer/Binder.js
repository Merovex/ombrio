import React, { useState } from 'react';
// import { DragDropContext } from 'react-beautiful-dnd';
// import ItemTypes from '../ItemTypes';

const renderBinderItem = (item, index) => {
  return (<div>{index} {item}</div>);
}
export const Binder = ({activeProjectId, sections}) => {
  const [draggingRowId, setDraggingRowId] = useState(null);

  const onDragEnd = (result) => {
    const { destination, source, reason } = result;
    // the item was dropped!
    if (!destination || reason === 'CANCEL') {
      setDraggingRowId(null);
      return;
    }
    if (
      destination.droppableId === source.droppableId
      && destination.index === source.index
    ) {
      return;
    }
    // Make deep copy of state
    // Assign the moved item
    // Splice deep copy of state
    // resetState copy.
  }

  return (
    <div>

      {sections.map((section, i) => renderBinderItem(section,i))}
    </div>
  )
}
