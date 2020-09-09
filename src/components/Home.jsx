import React, { Component } from "react";
import { Card, Button, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";
class Homes extends Component {
  state = {};
  render() {
    return (
      <CardGroup id="cardgroup">
        <Card id="card1" className="text-center">
          <Card.Header id="header"></Card.Header>
          <Card.Body>
            <Card.Title>Students Details</Card.Title>
            <Card.Text>Check out the details about Students</Card.Text>
            <Link to="/student">
              <Button variant="success">Go on</Button>
            </Link>
          </Card.Body>
          <Card.Footer className="text-muted" id="header"></Card.Footer>
        </Card>
        <Card id="card2" className="text-center">
          <Card.Header id="header"></Card.Header>
          <Card.Body>
            <Card.Title>Teachers Details</Card.Title>
            <Card.Text>Check out the details about Teachers</Card.Text>
            <Link to="/teacher">
              <Button variant="success">Go on</Button>
            </Link>
          </Card.Body>
          <Card.Footer className="text-muted" id="header"></Card.Footer>
        </Card>
      </CardGroup>
    );
  }
}

export default Homes;
