import React, {Component} from 'react';
import {observer} from 'mobx-react';
import WebService from '../../service/WebService';
import apikeys from '../../service/apikeys.json';
import JavaScriptEditor from './JavaScriptEditor.jsx';

@observer
class RightBodyMain extends Component {

    callBack(data){
        this.props.appState.setCodeSample(data['code']);
        this.props.appState.updateCodeLoader(false);
    }

    componentDidMount() {
        $('.menu .item').tab(); //Initiate the semantic-ui script for menu
        new WebService(apikeys['nGram']['code'], this.callBack.bind(this));
    }

    render() {
        return (
            <div>
                <div className="ui top attached tabular menu">
                    <a className="item active" data-tab="code">Code</a>
                    <a className="item" data-tab="second">Second</a>
                    <a className="item" data-tab="third">Third</a>
                </div>
                <div className="ui bottom attached tab segment active" data-tab="code">
                    <JavaScriptEditor appState={this.props.appState}/>
                </div>
                <div className="ui bottom attached tab segment" data-tab="second">
                    Second
                </div>
                <div className="ui bottom attached tab segment" data-tab="third">
                    Third
                </div>
            </div>
        );
    }
}

export default RightBodyMain