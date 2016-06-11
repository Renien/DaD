import React, {Component} from 'react';
import {observer} from 'mobx-react';
import TextView from '../components/TextView';

@observer
class TextBox extends Component {
    render() {
        return (
            <div>
               <input type="text" onKeyPress={this.onkeydown} ref="inputBox"/>
               <TextView appState={this.props.appState}/>
            </div>
        );
    }
    
    onkeydown = (e) => {
        debugger
        this.props.appState.setTextValue(this.refs.inputBox.value)
    }
}

export default TextBox