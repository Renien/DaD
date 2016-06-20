import React from 'react';
import ReactDOM from 'react-dom';
import SematicCSS from 'semantic-ui/dist/semantic.css';
import './semantic/semantic.js';
import MainLayout from './components/MainLayout';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import BodyLayout from './components/BodyLayout';
import SplashScreen from './components/SplashScreen';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={SplashScreen}/>
        <Route path="/:algoType" component={MainLayout}/>
    </Router>, document.getElementById('root'));