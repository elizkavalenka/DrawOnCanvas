import React, {useRef, useEffect} from 'react'
// import styled from 'styled-components';


// const SVG = 'M 10 10 H 90 V 90 H 10 Z'
// const PATH = new Path2D(SVG)
// const SCALE = 1
// const OFFSET = 80

// function figure(ctx, location) {
//     ctx.fillStyle = 'green'
//     ctx.save()
//     ctx.scale(SCALE, SCALE)
//     ctx.translate(location.x / SCALE - OFFSET, location.y / SCALE - OFFSET)
//     ctx.fill(PATH)
//     ctx.restore()
// }

function Draw() {
    const canvas = useRef(null);
    let ctx = null;
    const boxes = [
        { x: 300, y: 120, w: 100, h: 50 },
        { x: 100, y: 120, w: 100, h: 50 }
    ];
    let isDown = false;
    let dragTarget = null;
    let startX = null;
    let startY = null;

    useEffect(() => {
        const canvasEle = canvas.current;

        ctx = canvasEle.getContext("2d");
    }, []);

    useEffect(() => {
        paint();
    });

    const paint = () => {
        ctx.clearRect(
            0,
            0,
            canvas.current.clientWidth,
            canvas.current.clientHeight
        );
        boxes.map((info) => drawFillRect(info));
    };

    const drawFillRect = (info, style = {}) => {
        const { x, y, w, h } = info;
        const { backgroundColor = "green" } = style;

        ctx.beginPath();
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(x, y, w, h);
    };

    const hitBox = (x, y) => {
        let isTarget = null;
        for (let i = 0; i < boxes.length; i++) {
            const box = boxes[i];
            if (
                x >= box.x &&
                x <= box.x + box.w &&
                y >= box.y &&
                y <= box.y + box.h
            ) {
                dragTarget = box;
                isTarget = true;
                break;
            }
        }
        return isTarget;
    };

    const handleMouseDown = (e) => {
        startX = parseInt(e.nativeEvent.offsetX - canvas.current.clientLeft, 10);
        startY = parseInt(e.nativeEvent.offsetY - canvas.current.clientTop, 10);
        isDown = hitBox(startX, startY);
    };
    const handleMouseMove = (e) => {
        if (!isDown) return;

        const mouseX = parseInt(
            e.nativeEvent.offsetX - canvas.current.clientLeft,
            10
        );
        const mouseY = parseInt(
            e.nativeEvent.offsetY - canvas.current.clientTop,
            10
        );
        const dx = mouseX - startX;
        const dy = mouseY - startY;
        startX = mouseX;
        startY = mouseY;
        dragTarget.x += dx;
        dragTarget.y += dy;
        paint();
    };
    const handleMouseUp = (e) => {
        dragTarget = null;
        isDown = false;
    };
    const handleMouseOut = (e) => {
        handleMouseUp(e);
    };

    // const [locations, setLocations] = React.useState(
    //     JSON.parse(localStorage.getItem('paint-app')) || []
    // )
	// const canvasRef = React.useRef(null)

	// React.useEffect(() => {
    //     const canvas = canvasRef.current
    //     const ctx = canvas.getContext('2d')
    //     // ctx.clearRect(0, 0, window.innerHeight, window.innerWidth)
    //     // locations.forEach(location => figure(ctx, location))
	// })

	// React.useEffect(() => {
    //     localStorage.setItem('draw-app', JSON.stringify(locations))
	// })

	// function handleCanvasClick(e) {
    //     const newLocation = { x: e.clientX, y: e.clientY }
    //     setLocations([...locations, newLocation])
	// }
    
     
    return ( 
        <canvas
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseOut={handleMouseOut}
            ref={canvas}
            width={700}
        	height={700}
            // onClick={handleCanvasClick}  
        />
    )
}

export default Draw;