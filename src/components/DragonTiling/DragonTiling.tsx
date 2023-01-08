import React, {useRef, useEffect} from "react";
import "./DragonTiling.css";

const DragonTiling = () => {
    var {minI, maxI, minJ, maxJ, ray} = dragon();

    var width = maxI - minI + 1;
    var height = maxJ - minJ + 1;

    const canvasRef = useRef(null);

    useEffect(() => {
        // Get the 2D rendering context
        const ctx = canvasRef.current.getContext('2d');
    
        // Set the width and height of the canvas
        canvasRef.current.width = height;
        canvasRef.current.height = width;
    
        // Iterate over the array of zeroes and ones
        for (let y = 0; y < width; y++) {
          for (let x = 0; x < height; x++) {
            // Set the fill style based on the value in the array
            ctx.fillStyle = ray[(y + minJ) * 600 + x + minI] === 0 ? 'white' : 'black';
    
            // Draw a filled rectangle at the current position
            ctx.fillRect(x, y, 1, 1);
          }
        }
      }, [ray, height, width]);

  return (
    <canvas ref={canvasRef} />
);
};

const dragon = () : {minI: number, maxI: number, minJ: number, maxJ: number, ray: number[]} => {
    const gridSize = 600;
    const array = Array(gridSize * gridSize).fill(0);

    const n = 16;
    const drag = Array(Math.pow(2, n) - 1).fill(2);
    for (let i = n-1; i > -1 ; i--) {

        var mult = Math.pow(2, n-i);
        var offset = Math.pow(2, n-1-i) - 1;

        for (let j = 0; j < Math.pow(2, i); j++) {

            drag[j * mult + offset] = j % 2 === 0 ? 0 : 1;
        }
    }

    let count = 0;
    let sum = 0;
    let prevI = gridSize / 2;
    let prevJ = gridSize / 2;

    let minI = gridSize;
    let maxI = 0;
    let minJ = gridSize;
    let maxJ = 0;

    array[prevI * gridSize + prevJ] = 1;

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {

            sum++;

            if (sum > Math.pow(2, n) - 1) {
                break;
            }

            count += drag[i * gridSize + j] === 1 ? 1 : -1;
            count += 4;

            let val = count % 4;

            if (val === 0) {
                prevJ++;
            } else if (val === 1) {
                prevI++;
            } else if (val === 2) {
                prevJ--;
            } else if (val === 3) {
                prevI--;
            }

            minI = Math.min(minI, prevI);
            maxI = Math.max(maxI, prevI);
            minJ = Math.min(minJ, prevJ);
            maxJ = Math.max(maxJ, prevJ);

            array[prevI * gridSize + prevJ] = 1;
        }
    }

    return {
        minI: minI,
        maxI: maxI,
        minJ: minJ,
        maxJ: maxJ,
        ray: array
    };
}

export default DragonTiling;