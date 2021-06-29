import React from "react";
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

const Rectangle = styled.div`
    border: 2px solid black;
    background: green;
	width: 200px;
	height: 100px;
    cursor: grab;
`;

const Oval = styled.div`
    border: 2px solid black;
	background: blue;
	width: 200px;  
	height: 100px;
	border-radius: 50%;
    cursor: grab;
`;

function Pallete() {
	return (
    	<Wrapper>
      		<Oval draggable/>
			<Rectangle draggable/>
    	</Wrapper>
  	);
}

export default Pallete;