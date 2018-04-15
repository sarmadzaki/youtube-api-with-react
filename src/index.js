import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/login.jsx'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/login" component={Login} />
        </div>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
