import React from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage.component.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Homepage />
      </div>
    );
  }
}

export default App;
