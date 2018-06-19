import React, { Component } from 'react';
import {Route, Switch, NavLink} from 'react-router-dom'

import Github from './Github'
import Pokedex from './Pokedex'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>API Party</h1>
        </div>
        <ul className="navLinks">
          <li>
            <NavLink to="/github">GitHub</NavLink>
          </li>
          <li>
            <NavLink to="/pokedex">Pokedex</NavLink>
          </li>
         </ul>

        <Switch>
          <Route path="/github" component={Github} />
          <Route path="/pokedex" component={Pokedex} />
          <Route render={()=> <p>To get started, click one of the links above.</p>}/>
         </Switch> 
      </div>
    );
  }
}

export default App;
