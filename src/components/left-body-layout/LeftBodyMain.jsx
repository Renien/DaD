import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router';

//TBD > Need to add http://semantic-ui.com/modules/accordion.html
@observer
class LeftBodyMain extends Component {
    render() {
        return (
            <div>
             <div className="ui relaxed divided list">
                <div className="item">
                    <i className="large github middle aligned icon"></i>
                    <div className="content">
                        <Link to="ngram">N-Gram</Link>
                    <div className="description">Updated 10 mins ago</div>
                    </div>
                </div>
                <div className="item">
                    <i className="large github middle aligned icon"></i>
                    <div className="content">
                        <Link to="shangling">Shangling</Link>
                    <div className="description">Updated 22 mins ago</div>
                    </div>
                </div>
                <div className="item">
                    <i className="large github middle aligned icon"></i>
                    <div className="content">
                        <Link to="tf-idf">TF-IDF</Link>
                    <div className="description">Updated 34 mins ago</div>
                 </div>
                </div>
             </div>
            </div>
        );
    }
}

export default LeftBodyMain