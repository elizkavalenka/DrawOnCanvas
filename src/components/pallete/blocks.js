import React from "react";
import Draggable from "../pallete/draggable";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    margin-bottom: 30px;
  }
`;

const blocks = [
  { w: 100, h: 50, form: 1, color: "blue" },
  { w: 100, h: 50, form: 100, color: "green" }
];

const Blocks = ({ setDragData }) => {
  const onDragStart = (dragData) => {
    setDragData(dragData);
  };

  const onDragEnd = () => {};

  return (
    <Wrapper>
      {blocks.map((b) => (
        <Draggable
          key={b.name}
          dragObject={b}
          onDragStart={(dragData) => onDragStart(dragData)}
          onDragEnd={() => onDragEnd()}
        >
          <div 
            className="block" 
            style={{ 
                   width: b.w,
                   height: b.h,
                   borderRadius: b.form,
                   backgroundColor: b.color
                  }}
            ></div>
        </Draggable>
      ))}
    </Wrapper>
  );
};

export default Blocks;
