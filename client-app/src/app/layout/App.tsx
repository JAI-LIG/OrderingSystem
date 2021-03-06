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
  const [selectedAluminum, setSelectedAluminum] = useState<IAluminum | null>(null);
  const [colors, setColors] = useState<IColor[]>([]);
  const [selectedColor, setSelectedColor] = useState<IColor | null>(null);
  const [editModeAlu, setEditModeAlu] = useState(false);
  const [editModeColor, setEditModeColor] = useState(false);

  const handleSelectAluminum = (id: string) => {
    setSelectedAluminum(aluminums.filter((a) => a.aluminumId === id)[0]);
  };

  const handleSelectedColor = (id: string) => {
    setSelectedColor(colors.filter((a) => a.colorId === id)[0]);
  };

  const handleOpenCreateFormAlu = () => {
    setSelectedAluminum(null);
    setEditModeAlu(true);
  }

  const handleOpenCreateColor = () => {
    setSelectedColor(null);
    setEditModeColor(true);
  }


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
      <NavBar openCreateFormAlu={handleOpenCreateFormAlu} openCreateFormColor={handleOpenCreateColor}/>
      <Container style={{ marginTop: "5em" }}>
        <AluminumDashboard
          aluminums={aluminums}
          selectAluminum={handleSelectAluminum}
          selectedAluminum={selectedAluminum}
          editModeAlu={editModeAlu}
          setEditModeAlu={setEditModeAlu}
          setSelectedAluminum={setSelectedAluminum}
        />
        <ColorDashboard
          colors={colors}
          selectColor={handleSelectedColor}
          selectedColor={selectedColor}
          editModeColor={editModeColor}
          setEditModeColor={setEditModeColor}
          setSelectedColor={setSelectedColor}
        />
      </Container>
    </Fragment>
  );
};

export default App;
