import React, { Component } from "react";
import StdTable from "./StdTable";
import Students from "./Student";
class Apps extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      Roll_No: "",
      Class: "",
      Section: "",
      items: [],
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    let items = [...this.state.items];
    items.push({
      name: this.state.name,
      Roll_No: this.state.Roll_No,
      Class: this.state.Class,
      Section: this.state.Section,
    });
    this.setState({
      items,
      name: "",
      Roll_No: "",
      Class: "",
      Section: "",
    });
  };

  //  HANDLE CHANGES
  handleRollNoChange = (event) => {
    this.setState({
      Roll_No: event.target.value,
    });
  };
  handleUsernameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleSectionChange = (event) => {
    this.setState({
      Section: event.target.value,
    });
  };
  handleClassChange = (event) => {
    this.setState({
      Class: event.target.value,
    });
  };

  //   HANDLE CHANGES

  render() {
    return (
      <div className="App">
        <Students
          onSubmit={this.onSubmit}
          handleUsernameChange={this.handleUsernameChange}
          handleRollNoChange={this.handleRollNoChange}
          handleClassChange={this.handleClassChange}
          handleSectionChange={this.handleSectionChange}
          name={this.name}
          Roll_No={this.Roll_No}
          Class={this.Class}
          Section={this.Section}
        />
        <StdTable items={this.state.items} />
      </div>
    );
  }
}

export default Apps;
