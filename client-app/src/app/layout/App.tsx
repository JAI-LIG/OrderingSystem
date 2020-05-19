import React, { Component } from "react";
import { Header, Icon, List } from "semantic-ui-react";
import axios from "axios";
import { IAluminum } from "../models/aluminum";
import { IColor } from "../models/color";

interface IState {
  aluminums: IAluminum[],
  colors: IColor[]
}
class App extends Component<{}, IState> {
  state: IState = {
    aluminums: [],
    colors: []
  };

  componentDidMount() {
    axios.get<IAluminum[]>("http://localhost:5001/api/aluminums").then((response) => {
      console.log(response);
      this.setState({
        aluminums: response.data,
      });
    });
    axios.get<IColor[]>("http://localhost:5001/api/colors").then((response) => {
      this.setState({
        colors: response.data
      });
    });
  }

  render() {
    return (
      <div>
        <Header as="h2">
          <Icon name="boxes" />
          <Header.Content>Aluminum</Header.Content>
        </Header>
        <List>
        {this.state.aluminums.map((aluminum) => (
           <List.Item key={aluminum.aluminumId}>{aluminum.aluminumName}</List.Item>
          ))}  
        </List>
        <List>
        {this.state.colors.map((color) => (
           <List.Item key={color.colorId}>{color.colorName}, {color.divisionId}, {color.fabricId}</List.Item>
          ))}  
        </List>
      </div>
    );
  }
}

export default App;
