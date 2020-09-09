import React, { Component } from "react";
import { Table } from "react-bootstrap";

class TTable extends React.Component {
  render() {
    const items = this.props.items;
    return (
      <div id="Table">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Class</th>
              <th>Section</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.Roll_No}</td>
                  <td>{item.Class}</td>
                  <td>{item.Section}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default TTable;
