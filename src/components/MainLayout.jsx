import React, {Component} from 'react';
import {observer} from 'mobx-react';

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
            <div>
                <div className="ui inverted vertical footer segment">
                    <div className="ui center aligned container">
                        Data Algorithms Dissemination
                    </div>
                </div>
                    <BodyLayout appState={appState} />
                <div className="ui inverted vertical footer segment form-pag">
                    <div className="ui center aligned container">
                        Love of Data Science & Java Script by Renien
                    </div>
                </div>
            </div>
        );
    }
}

export default MainLayout