import React from "react";
import { Grid, List, Segment, Header } from "semantic-ui-react";
import { IAluminum } from "../../../app/models/aluminum";
import AluminumList from "./AluminumList";

interface IProps {
  aluminums: IAluminum[];
}
const AluminumDashboard: React.FC<IProps> = ({ aluminums }) => {
  return (
    <Segment>
        <Header content='Aluminum'/>
      <Grid>
        <Grid.Column width={10}>
          <AluminumList aluminums={aluminums} />
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default AluminumDashboard;
