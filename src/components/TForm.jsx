import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Student.css";

class TForm extends React.Component {
  render() {
    return (
      <div id="Form">
        <Form id="form" onSubmit={this.props.onSubmit}>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="Name"
                value={this.props.name}
                onChange={this.props.handleUsernameChange}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>ID</Form.Label>
              <Form.Control
                placeholder="ID"
                value={this.props.Roll_No}
                onChange={this.props.handleRollNoChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Class</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Choose..."
                value={this.props.Class}
                onChange={this.props.handleClassChange}
              >
                <option>Choose...</option> <option>1</option> <option>2</option>{" "}
                <option>3</option> <option>4</option> <option>5</option>{" "}
                <option>6</option> <option>7</option> <option>8</option>{" "}
                <option>9</option> <option>10</option> <option>11</option>{" "}
                <option>12</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Section</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Choose..."
                value={this.props.Section}
                onChange={this.props.handleSectionChange}
              >
                <option>Choose...</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
                <option>E</option>
                <option>F</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Button type="submit" value="Submit" variant="success">
            Add Item
          </Button>
          {/* <Link to="/student">
            <Button variant="primary" type="submit" value="submit">
              Submit
            </Button>
          </Link> */}
        </Form>
      </div>
    );
  }
}
export default TForm;
