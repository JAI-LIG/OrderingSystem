import React, { useState, useEffect } from "react";
import { Header, Icon, List } from "semantic-ui-react";
import axios from "axios";
import { IAluminum } from "../models/aluminum";
import { IColor } from "../models/color";


const App = () => {
  const [aluminums, setAluminums] = useState<IAluminum[]>([]);
  const [colors, setColors] = useState<IColor[]>([]);

  useEffect(() => {
     axios.get<IAluminum[]>("http://localhost:5001/api/aluminums").then((response) => {
      console.log(response);
      setAluminums(response.data);
    });
    axios.get<IColor[]>("http://localhost:5001/api/colors").then((response) => {
      setColors(response.data);
    });   
  }, [])

    return (
      <div>
        <Header as="h2">
          <Icon name="boxes" />
          <Header.Content>Aluminum</Header.Content>
        </Header>
        <List>
        {aluminums.map((aluminum) => (
           <List.Item key={aluminum.aluminumId}>{aluminum.aluminumName}</List.Item>
          ))}  
        </List>
        <List>
        {colors.map((color) => (
           <List.Item key={color.colorId}>{color.colorName}, {color.divisionId}, {color.fabricId}</List.Item>
          ))}  
        </List>
      </div>
    );
}

export default App;
