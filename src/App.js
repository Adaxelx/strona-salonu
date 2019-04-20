import React, { Component } from 'react';
import NavM from './MobileComponents/Nav/NavM.js'
import Logo from './MobileComponents/Logo.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo/>
        <NavM/>
      </div>
    );
  }
}

export default App;
