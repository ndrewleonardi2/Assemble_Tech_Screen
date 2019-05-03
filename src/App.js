import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Cart from './components/cart';
import Info from './components/info';
import Checkout from './components/checkout';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router className="App">
        <Route path="/" exact component={Cart} />
        <Route path="/info/" component={Info} />
        <Route path="/checkout/" component={Checkout} />
      </Router>
    );
  }
}

export default App;
