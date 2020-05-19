import React, { ReactText } from "react";
import { Grid, GridColumn, List, Segment, Header } from "semantic-ui-react";
import { IColor } from "../../../app/models/color";
import ColorList from "./ColorList";

interface IProps {
  colors: IColor[];
}

const ColorDashboard: React.FC<IProps> = ({ colors }) => {
  return (
    <Segment content=''>
       <Header content="Fabric Colors"/>
      <Grid>
        <Grid.Column width={10}>
          <ColorList colors={colors} />
        </Grid.Column>
      </Grid>{" "}
    </Segment>
  );
};

export default ColorDashboard;
