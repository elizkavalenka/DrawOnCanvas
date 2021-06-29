import React from 'react'
// import styled from 'styled-components';

const HOOK_SVG = 'M 10 10 H 90 V 90 H 10 Z'
const HOOK_PATH = new Path2D(HOOK_SVG)
const SCALE = 1
const OFFSET = 10

function figure(ctx, location) {
    ctx.fillStyle = 'green'
    ctx.save()
    ctx.scale(SCALE, SCALE)
    ctx.translate(location.x / SCALE - OFFSET, location.y / SCALE - OFFSET)
    ctx.fill(HOOK_PATH)
    ctx.restore()
}

function Draw() {
    const [locations, setLocations] = React.useState(
        JSON.parse(localStorage.getItem('draw-app')) || []
    )
	const canvasRef = React.useRef(null)

	React.useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, window.innerHeight, window.innerWidth)
        locations.forEach(location => figure(ctx, location))
	})

	React.useEffect(() => {
        localStorage.setItem('draw-app', JSON.stringify(locations))
	})

	function handleCanvasClick(e) {
        const newLocation = { x: e.clientX, y: e.clientY }
        setLocations([...locations, newLocation])
	}
    
     
    return ( 
        <canvas
            ref={canvasRef}
            width={window.innerWidth}
        	height={window.innerHeight}
            onClick={handleCanvasClick}
        />
    )
}

export default Draw;