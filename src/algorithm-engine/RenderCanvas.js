import Fabric from 'fabric';
let fabric = window['fabric'];

class RenderCanvas {

    constructor(canvas) {
        this.canvas = canvas;
    }

    draw() {
        // create a rectangle object
        let rect = new fabric.Rect({
            left: 100,
            top: 100,
            fill: 'red',
            width: 20,
            height: 20
        });

        // "add" rectangle onto canvas
        this.canvas.add(rect);      
    }
}

export default RenderCanvas