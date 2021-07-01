import React, {useRef, useEffect} from 'react'

function Draw() {
    const canvas = useRef(null);
    let ctx = null;
    const boxes = [
        { x: 300, y: 120, w: 100, h: 50, color: "green" },
    	{ x: 100, y: 120, w: 100, h: 50, color: "blue" }
    ];
    let isDown = false;
    let dragTarget = null;
    let startX = null;
    let startY = null;

    useEffect(() => {
        const canvasEle = canvas.current;
        ctx = canvasEle.getContext("2d");
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

    const drawFillRect = (info) => {
        const { x, y, w, h,  color} = info;
       
        ctx.beginPath();
        ctx.fillStyle = color;
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
	
    const handleMouseDblClick = (e) => {
	 const info = { x: e.clientX, y: e.clientY, w: 100, h: 50, color: "blue" };
	 boxes.push(info);
	 drawFillRect(info);
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
            width={document.documentElement.clientWidth * 0.7}
      	    height={document.documentElement.clientHeight * 0.7}
            onDoubleClick={handleMouseDblClick}
        />
    )
}

export default Draw;
