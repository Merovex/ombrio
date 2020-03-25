import React from 'react';
import {  Draggable } from 'react-beautiful-dnd';
export const BinderItem = ({provided, item, index, snapshot}) => {
  return <Draggable
    key={item.uuid}
    draggableId={item.uuid}
    index={index}>
    {(provided, snapshot) => (
      <div
        className="draggable"
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
         {item.title}
      </div>
    )}
  </Draggable>
}
