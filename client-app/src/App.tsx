import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from 'axios';

class App extends Component {
  state = {
    aluminums: [],
  };

  componentDidMount() {
    axios.get('http://localhost:5001/api/aluminums')
      .then((response) => {
        console.log(response)
        this.setState({
          aluminums: response.data
           });        
      })

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
