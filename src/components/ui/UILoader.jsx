import React, {Component} from 'react';
import {observer} from 'mobx-react';

@observer
class UILoader extends Component {

    componentWillReceiveProps(nextProps) {
        //Update the 'algoType' to the state
        if(nextProps.isActive == false){
            $('.ui .inverted').addClass('disabled').removeClass('active');
        }else{
            $('.ui .inverted').addClass('active').removeClass('disabled');
        }
            
    }

    render() {
        return (
            <div>
                <div className="ui segment">
                    <div className="ui active inverted dimmer">
                        <div className="ui text loader">Loading</div>
                    </div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default UILoader