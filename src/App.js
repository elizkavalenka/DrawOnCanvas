import React, {useState} from 'react';
import Draw from './components/draw';
import Blocks from './components/draw'
import styled from "styled-components";

const Table = styled.div`
	border: 1px solid black;
	display: grid;
	grid: 7vh 70vh / 1fr 3fr;
	margin: 50px;
`;

const Header = styled.h2`
	padding-top: 10px;
	border: 1px solid black;
	background: #d3d3d3;
	text-align: center;
`;

const Container = styled.div`
	border: 1px solid black;
`;

function App() {

	const [draggedData, setDragData] = useState(null);

	return (
		<Table>
			<Header>Figures</Header>
			<Header>Canvas</Header>
			<Container>
				<Blocks setDragData={(dragData) => setDragData(dragData)} />
		     	</Container>
			<Container>
				<Draw draggedData={draggedData} />
			</Container>
		</Table>
	);
}

export default App;
