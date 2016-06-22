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
        this.props.appState.setTheory(data['theory']);
        this.props.appState.setSampleImplementation(data['sample_implementations']);
        this.props.appState.setReferences(data['references']);
    }

    componentDidMount() {
        $('.menu .item').tab(); //Initiate the semantic-ui script for menu
        new WebService(apikeys['nGram']['code'], this.callBack.bind(this));
    }

    render() {

        let items = this.props.appState.references.map((item, index) => {
            return (
                    <a className="item" href={item.url} key={index}>
                        <i className="right triangle icon"></i>
                        <div className="content">
                        <div className="header">{item.header}</div>
                        <div className="description">{item.description}</div>
                        </div>
                    </a>
                    )
                });

        return (
            <div>
                <div className="ui top attached tabular menu">
                    <a className="item active" data-tab="code">Code</a>
                    <a className="item" data-tab="second">Theory</a>
                    <a className="item" data-tab="third">Reference</a>
                </div>
                <div className="ui bottom attached tab segment active" data-tab="code">
                    <JavaScriptEditor appState={this.props.appState}/>
                </div>
                <div className="ui bottom attached tab segment" data-tab="second">
                    {this.props.appState.theory}
                </div>
                <div className="ui bottom attached tab segment" data-tab="third">
                    <div className="ui list">
                        {items}
                     </div>
                </div>
            </div>
        );
    }
}

export default RightBodyMain