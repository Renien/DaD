import React, {Component} from 'react';
import {observer} from 'mobx-react';
import LayOutCSS  from '../styles/layout.css';
import BodyLayout from '../components/BodyLayout';
import appState from '../stores/index.jsx';

@observer
class MainLayout extends Component {

    componentWillMount(){
        //Initialize the default algo type
        // appState.algoType = this.props.params.algoType; //bad practice
    }

    componentWillReceiveProps(nextProps) {
        //Update the 'algoType' to the state
        appState.setAlgoType(nextProps.params.algoType);
    }

    render() {
        return (
            <div className="ui container layout">
                <div className="segment ui">
                    Header
                </div>
                <div className="segment ui">
                    <BodyLayout appState={appState} />
                </div>
                <div className="segment ui">
                    Footer
                </div>
            </div>
        );
    }
}

export default MainLayout