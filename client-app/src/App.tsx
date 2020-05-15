import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    aluminums: [],
  };

  componentDidMount() {
    
    this.setState({
      aluminums: [
        { AluminumId: "A-023", AluminumName: "new Aluminum23" },
        { AluminumId: "A-323", AluminumName: "new Aluminum323" },
      ],
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            {this.state.aluminums.map((aluminum: any) => (
              <li>{aluminum.AluminumName}</li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
