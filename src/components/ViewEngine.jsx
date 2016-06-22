import React, {Component} from 'react';
import {observer} from 'mobx-react';
import RenderCanvas from '../algorithm-engine/RenderCanvas';
import Fabric from 'fabric';

@observer
class ViewEngine extends Component {
    
    componentDidMount() {
        let fabric = window['fabric'];
        let canvas = new fabric.Canvas('algoview');
        const renderCanvas = new RenderCanvas(canvas);
        renderCanvas.draw();
    }

    render() {
        return (
            <div className="ui segment">
                <canvas id="algoview"/>
                View Engine
            </div>
        );
    }
}

export default ViewEngine