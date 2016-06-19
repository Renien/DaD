import React, {Component} from 'react';
import {observer} from 'mobx-react';
import WebService from '../../service/WebService';
import apikeys from '../../service/apikeys.json';

@observer
class RightBodyMain extends Component {

     componentDidMount() {
        new WebService(apikeys['nGram']['code']);
    }

    render() {
        return (
            <div>
                <div className="ui fluid three item menu">
                    <a className="item">Code</a>
                    <a className="item">Theory</a>
                    <a className="item active">Reference</a>
                </div>
                <div className="ui bottom attached segment">
                    Content Components
                </div>
            </div>
        );
    }
}

export default RightBodyMain