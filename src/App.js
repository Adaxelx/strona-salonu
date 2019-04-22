import React, { Component } from 'react';
import NavM from './MobileComponents/Nav/NavM.js'
import Logo from './MobileComponents/Logo.js'
import Home from './MobileComponents/HomeM.js'
import {Switch,BrowserRouter as Router,Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
     <>
        <Logo/>
          <NavM/>
        <Router>
          <Switch>
            <Route link='/' exact component={Home}/>>
          </Switch>
        </Router>
     </>
    );
  }
}

export default App;
