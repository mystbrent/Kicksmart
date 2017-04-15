import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import client from '../app';
import {HashRouter as Router, Route} from 'react-router-dom';
import AppContainer from './AppContainer';
(() => {
    
    injectTapEventPlugin();
    ReactDOM.render(
    <Router>
        <div>
        <Route path="/" component={() => (<AppContainer />)}/>
        </div>                      
    </Router>
    , document.querySelector('#mount-point'));
})();



window.app = client;
