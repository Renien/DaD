import React, {Component} from 'react';
import {observer} from 'mobx-react';
import ViewEngine from '../components/ViewEngine';
import RightBodyMain from '../components/right-body-layout/RightBodyMain';
import LeftBodyMain from '../components/left-body-layout/LeftBodyMain';
import LayOutCSS  from '../styles/layout.css';

@observer
class BodyLayout extends Component {
    render() {
        return (
            <div className="ui three column stackable grid">
                <div className="column">
                    <LeftBodyMain appState={this.props.appState}/>
                </div>
                <div className="column">
                    <ViewEngine appState={this.props.appState}/>
                </div>
                <div className="column">
                    <RightBodyMain appState={this.props.appState}/>
                </div>
            </div>
        );
    }
}

export default BodyLayout