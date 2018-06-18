import React, { Component } from 'react';
import {Route, Switch, NavLink} from 'react-router-dom'

import Github from './Github'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>API Party</h1>
        </div>
        <ul>
          <li>
            <NavLink to="/github">GitHub</NavLink>
          </li>
         </ul>

        <Switch>
          <Route path="/github" component={Github} />
          <Route render={()=> <p>To get started, click one of the links above.</p>}/>
         </Switch> 
      </div>
    );
  }
}

export default App;
