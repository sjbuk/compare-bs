import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Navigation from './Components/Navigation';
import HomePage from './Components/HomePage'
import FormPage from './Components/FormPage';

function App() {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <Switch>
                    <Route path="/form"> <FormPage /> </Route>
                    <Route path="/"> <HomePage /> </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
