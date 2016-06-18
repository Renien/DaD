import React, {Component} from 'react';
import {observer} from 'mobx-react';
import ViewEngine from '../components/ViewEngine';
import RightBodyMain from '../components/right-body-layout/RightBodyMain';
import LeftBodyMain from '../components/left-body-layout/LeftBodyMain';

@observer
class BodyLayout extends Component {
    render() {
        return (
            <div className="ui three column stackable grid">
                <div className="column">
                    <div className="ui segment">
                        <LeftBodyMain appState={this.props.appState}/>
                     </div>
                </div>
                <div className="column">
                    <div className="ui segment">
                        <ViewEngine appState={this.props.appState}/>
                    </div>
                </div>
                <div className="column">
                    <div className="ui segment">
                         <RightBodyMain appState={this.props.appState}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default BodyLayout