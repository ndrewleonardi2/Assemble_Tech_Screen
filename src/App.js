import React, { Component } from 'react';
import Cart from './components/cart';
import Info from './components/info';
import Checkout from './components/checkout';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cart></Cart>
        <Checkout></Checkout>
        <Info></Info>
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
