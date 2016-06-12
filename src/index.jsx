import React from 'react';
import ReactDOM from 'react-dom';
import MainLayout from './components/MainLayout';
import appState from './stores/index.jsx';
import SematicCSS from 'semantic-ui/dist/semantic.css';
import Sematic from 'semantic-ui/dist/semantic.js';

ReactDOM.render(<MainLayout appState={appState} />, document.getElementById('root'));