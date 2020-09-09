import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./components/Navbar";
import Homes from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Students from "./components/Student";
import Teachers from "./components/Teacher";
import StdTable from "./components/StdTable";
import Apps from "./components/App";
import "./App.css";
import { Navbar } from "react-bootstrap";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbars />
        <Route exact path="/" component={Homes} />
        <Route path="/student" component={Apps} />

        <Route path="/teacher" component={Teachers} />
      </div>
    </Router>
  );
}

export default App;
