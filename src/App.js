import React from 'react';
import Pallete from './components/pallete';
import Draw from './components/draw';

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
	return (
			<Table>
				<Header>Figures</Header>
				<Header>Canvas</Header>
				<Container>
					<Pallete />
				</Container>
				<Container>
					<Draw />
				</Container>
			</Table>
	);
}

export default App;