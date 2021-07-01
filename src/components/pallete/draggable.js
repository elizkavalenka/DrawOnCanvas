import React from "react";

const Draggable = ({ children, dragObject, onDragStart, onDragEnd }) => {
  const onDragStarting = (e) => {
    let currentTargetRect = e.currentTarget.getBoundingClientRect();
    const offset = [
      e.clientX - currentTargetRect.left,
      e.clientY - currentTargetRect.top
    ];

    onDragStart({ dragObject, offset });
  };

  const onDragEnding = (e) => {
    e.stopPropagation();
    onDragEnd();
  };

  return (
    <div
      className="draggable"
      draggable={true}
      onDragStart={onDragStarting}
      onDragEnd={onDragEnding}
    >
      {children}
    </div>
  );
};

export default Draggable;