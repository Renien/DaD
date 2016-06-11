import React from 'react';
import ReactDOM from 'react-dom';
import TextBox from './components/TextBox';
import appState from './stores/index.jsx';

ReactDOM.render(<TextBox appState={appState} />, document.getElementById('root'));