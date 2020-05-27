import React from "react";
import { Grid, List, Segment, Header, GridColumn } from "semantic-ui-react";
import { IAluminum } from "../../../app/models/aluminum";
import AluminumList from "./AluminumList";
import AluminumDetails from "../details/AluminumDetails";
import AluminumForm from "../form/AluminumForm";

interface IProps {
  aluminums: IAluminum[];
}
const AluminumDashboard: React.FC<IProps> = ({ aluminums }) => {
  return (
    <Segment clearing>
        <Header content='Aluminum'/>
      <Grid>
        <Grid.Column width={10}>
          <AluminumList aluminums={aluminums} />
        </Grid.Column>
        <GridColumn width={6}>
            <AluminumDetails/>
            <AluminumForm/>
        </GridColumn>
      </Grid>
    </Segment>
  );
};

export default AluminumDashboard;
