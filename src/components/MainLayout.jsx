import React, {Component} from 'react';
import {observer} from 'mobx-react';

@observer
class MainLayout extends Component {
    render() {
        return (
            <div>
                Hello World!!!
            </div>
        );
    }
}

export default MainLayout