import React, { Component } from "react";
import { Table } from "react-bootstrap";

class StdTable extends React.Component {
  render() {
    const items = this.props.items;
    return (
      <div id="Table">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll Number</th>
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
        {/* hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh */}
        {/* <table>
          <tbody>
            <tr>
              <th>name</th>
              <th>Roll</th>
              <th>Class</th>
              <th>Section</th>
            </tr>
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
        </table> */}
      </div>
    );
  }
}

export default StdTable;
