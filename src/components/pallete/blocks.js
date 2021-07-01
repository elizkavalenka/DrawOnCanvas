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
  { name: "rectangle", color: "blue" },
  { name: "ellips", color: "green" }
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
          <div className="block" style={{ backgroundColor: b.color }}>
            {b.name}
          </div>
        </Draggable>
      ))}
    </Wrapper>
  );
};

export default Blocks;
