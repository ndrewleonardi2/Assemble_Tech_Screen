import React, { Component } from 'react';
import { Button, Image, List } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import '../styles/Cart.css';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cart: [
        { sku: 38094374, unitPrice: 24.0, name: "Red Shirt", quantity: 2, price: 2 },
        { sku: 38094375, unitPrice: 24.0, name: "Blue Shirt", quantity: 1, price: 2 },
        { sku: 38094321, unitPrice: 12.0, name: "Blue socks", quantity: 4, price: 2 }
      ]
    }
  }
  render() {
    return (
      <List divided verticalAlign='middle' className="Cart">
        <List.Header floated='right'>Your Cart</List.Header>
        {
          this.state.cart.map((item) => {
            return (
              <List.Item>
                <List.Content floated='right'>
                  <Button>Add</Button>
                </List.Content>
                <List.Content floated='right'>
                  <p>{item.price}</p>
                </List.Content>
                <List.Content floated='right'>
                  <p>{item.quantity}</p>
                </List.Content>
                <Image avatar src='https://www.discountmugs.com/product-images/colors/5-5-oz-50-50-cotton-polyester-preshrunk-5170-white-1487613655.jpg' />
                <List.Content>
                  <p>{item.name}</p>
                  <p>{item.sku}</p>
                </List.Content>
              </List.Item>
            )
          })
        }
        <Link to="/checkout">Checkout</Link>
      </List>
    );
  }
}

export default Cart;