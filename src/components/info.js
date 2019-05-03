import React, { Component } from 'react';
import { Card, Button, Checkbox, Form } from 'semantic-ui-react'
import '../styles/Info.css';

class Info extends Component {
  render() {
    return (
      <Card className="Info">
        <Form className="Personal">
          <Form.Field>
            <label>Name on Card</label>
            <input placeholder='Name On Card' />
          </Form.Field>
          <Form.Field>
            <label>Credit Card Number</label>
            <input placeholder='Credit Card Number' />
          </Form.Field>
          <Form.Field>
            <label>Expiration Date</label>
            <input placeholder='Expiration Date' />
          </Form.Field>
          <Form.Field>
            <label>CVC</label>
            <input placeholder='CVC' />
          </Form.Field>
        </Form>
        <Form className="Shipping">
          <Form.Field>
            <label>Name</label>
            <input placeholder='Name' />
          </Form.Field>
          <Form.Field>
            <label>Address</label>
            <input placeholder='Address' />
          </Form.Field>
          <Form.Field>
            <label>Address 2</label>
            <input placeholder='Address 2' />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input placeholder='City' />
          </Form.Field>
          <Form.Field>
            <label>Country</label>
            <input placeholder='Country' />
          </Form.Field>
          <Form.Field>
            <label>State</label>
            <input placeholder='State' />
          </Form.Field>
          <Form.Field>
            <label>Zip Code</label>
            <input placeholder='Zip Code' />
          </Form.Field>
          <Checkbox label='Billing address same as shipping' />
        </Form>
        <Button type='submit'>Place Order</Button>
      </Card>

    );
  }
}

export default Info;