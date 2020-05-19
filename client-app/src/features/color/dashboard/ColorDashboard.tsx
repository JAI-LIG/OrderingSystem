import React, { ReactText } from "react";
import { Grid, GridColumn, List } from "semantic-ui-react";
import { IColor } from "../../../app/models/color";

interface IProps {
    colors: IColor[]
}

const ColorDashboard: React.FC<IProps> = ({colors}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <List>
          {colors.map((color) => (
            <List.Item key={color.colorId}>
              {color.colorName}, {color.divisionId}, {color.fabricId}
            </List.Item>
          ))}
        </List>
      </Grid.Column>
    </Grid>
  );
};

export default ColorDashboard;
