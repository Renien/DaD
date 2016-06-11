import React, {Component} from 'react';
import {observer} from 'mobx-react';

@observer
class TextView extends Component {
    render() {
        return (
            <div>
            Entered values : {this.props.appState.textValue}
            </div>
        );
    }
}

export default TextView