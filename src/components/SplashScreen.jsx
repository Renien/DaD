import React, {Component} from 'react';
import {observer} from 'mobx-react';
import { Link } from 'react-router'

@observer
class SplashScreen extends Component {
    render() {
        return (
            <div className="ui segment">
                Welcome to DaD!!!
                <Link to="/default"> 
                    <button className="ui secondary button">
                        Start
                    </button>
                </Link>
            </div>
            
        );
    }
}

export default SplashScreen