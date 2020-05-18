import React, { Component } from "react";
import { Header, Icon, List } from "semantic-ui-react";
import axios from "axios";

class App extends Component {
  state = {
    aluminums: [],
  };

  componentDidMount() {
    axios.get("http://localhost:5001/api/aluminums").then((response) => {
      console.log(response);
      this.setState({
        aluminums: response.data,
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
        {this.state.aluminums.map((aluminum: any) => (
           <List.Item key={aluminum.aluminumId}>{aluminum.aluminumName}</List.Item>
          ))}  
        </List>
      </div>
    );
  }
}

export default App;
