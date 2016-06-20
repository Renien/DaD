import React, {Component} from 'react';
import {observer} from 'mobx-react';

import AceEditor from 'react-ace';
import brace from 'brace';

import 'brace/mode/java';
import 'brace/mode/javascript';

import 'brace/theme/github';
import 'brace/theme/monokai';
import 'brace/theme/solarized_light';
import 'brace/ext/language_tools';

import UILoader from '../ui/UILoader';

@observer
class JavaScriptEditor extends Component {

    render() {
        return (
            <div>
                <UILoader isActive={this.props.appState.isCodeLoad}>
                    <AceEditor
                        mode="java"
                        theme="github"
                        name="blah1"
                        height="50%"
                        width="100%"
                        value={this.props.appState.codeSample}
                    />
                  </UILoader>
            </div>
        );
    }
}

export default JavaScriptEditor