import React from "react";
import { Grid, List, Segment, Header, GridColumn } from "semantic-ui-react";
import { IAluminum } from "../../../app/models/aluminum";
import AluminumList from "./AluminumList";
import AluminumDetails from "../details/AluminumDetails";
import AluminumForm from "../form/AluminumForm";

interface IProps {
  aluminums: IAluminum[];
  selectAluminum: (id: string) => void;
  selectedAluminum: IAluminum | null;
  editModeAlu: boolean;
  setEditModeAlu: (editModeAlu: boolean) => void;
  setSelectedAluminum: (aluminum: IAluminum | null) => void;
}
const AluminumDashboard: React.FC<IProps> = ({
  aluminums,
  selectAluminum,
  selectedAluminum,
  editModeAlu,
  setEditModeAlu,
  setSelectedAluminum
}) => {
  return (
    <Segment clearing>
      <Header content="Aluminum" />
      <Grid>
        <Grid.Column width={10}>
          <AluminumList aluminums={aluminums} selectAluminum={selectAluminum} />
        </Grid.Column>
        <GridColumn width={6}>
          {selectedAluminum && !editModeAlu && (
            <AluminumDetails
              aluminum={selectedAluminum}
              setEditModeAlu={setEditModeAlu}
              setSelectedAluminum={setSelectedAluminum}

            />
          )}
          {editModeAlu && <AluminumForm setEditModeAlu={setEditModeAlu} />}
        </GridColumn>
      </Grid>
    </Segment>
  );
};

export default AluminumDashboard;
