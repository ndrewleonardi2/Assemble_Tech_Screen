import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Button } from 'semantic-ui-react'
import '../styles/Checkout.css';

class Checkout extends Component {
  render() {
    return (
      <Container className="Checkout">
        <p>Hooray, way to order those products!</p>
        <Link to="/">Go Home</Link>
      </Container>
    );
  }
}

export default Checkout;