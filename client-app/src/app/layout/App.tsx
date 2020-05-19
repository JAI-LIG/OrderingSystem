import React, { useState, useEffect, Fragment } from "react";
import { List, Container } from "semantic-ui-react";
import axios from "axios";
import { IAluminum } from "../models/aluminum";
import { IColor } from "../models/color";
import NavBar from "../../features/nav/NavBar";
import AluminumDashboard from "../../features/aluminum/dashboard/AluminumDashboard";
import ColorDashboard from "../../features/color/dashboard/ColorDashboard";

const App = () => {
  const [aluminums, setAluminums] = useState<IAluminum[]>([]);
  const [colors, setColors] = useState<IColor[]>([]);

  useEffect(() => {
    axios
      .get<IAluminum[]>("http://localhost:5001/api/aluminums")
      .then((response) => {
        console.log(response);
        setAluminums(response.data);
      });
    axios.get<IColor[]>("http://localhost:5001/api/colors").then((response) => {
      setColors(response.data);
    });
  }, []);

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: "5em" }}>
        <AluminumDashboard aluminums={aluminums} />
        <ColorDashboard colors={colors} />
      </Container>
    </Fragment>
  );
};

export default App;
