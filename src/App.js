import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from './Home';
import Team from './Team';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <ul className="header">
          <li><NavLink to="/team">Team</NavLink></li>
          <li><NavLink to="/">Home</NavLink></li>
        </ul>
        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/team" component={Team}/>
        </div>
      </HashRouter>
    );
  }
}

export default App;