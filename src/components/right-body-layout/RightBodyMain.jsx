import React, {Component} from 'react';
import {observer} from 'mobx-react';

@observer
class RightBodyMain extends Component {
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