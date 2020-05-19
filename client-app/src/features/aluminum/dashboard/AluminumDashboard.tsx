import React from "react";
import { Grid, List } from "semantic-ui-react";
import { IAluminum } from "../../../app/models/aluminum";

interface IProps {
    aluminums: IAluminum[]
}
const AluminumDashboard: React.FC<IProps> = ({aluminums}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <List>
          {aluminums.map((aluminum) => (
            <List.Item key={aluminum.aluminumId}>
              {aluminum.aluminumName}
            </List.Item>
          ))}
        </List>
      </Grid.Column>
    </Grid>
  );
};

export default AluminumDashboard;
