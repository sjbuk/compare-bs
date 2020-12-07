import React from 'react';
import {HashRouter as Router, Route,  Switch} from 'react-router-dom'
import './App.css';
import Navigation from './Components/Navigation';
import HomePage from './Components/HomePage'

function App() {
    return (
        <Router>
        <div className="App">
            <Navigation />
            <Switch>
                <Route exact path="/" component={HomePage} />
            </Switch>
        </div>
        </Router>
    );
}

export default App;
