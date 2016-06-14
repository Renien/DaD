import React from 'react';
import ReactDOM from 'react-dom';
import SematicCSS from 'semantic-ui/dist/semantic.css';
import Sematic from 'semantic-ui/dist/semantic.js';
import MainLayout from './components/MainLayout';
import appState from './stores/index.jsx';


ReactDOM.render(<MainLayout appState={appState} />, document.getElementById('root'));