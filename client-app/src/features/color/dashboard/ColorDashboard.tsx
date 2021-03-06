import React, { ReactText } from "react";
import { Grid, GridColumn, List, Segment, Header } from "semantic-ui-react";
import { IColor } from "../../../app/models/color";
import ColorList from "./ColorList";
import ColorDetails from "../details/ColorDetails";
import ColorForm from "../form/ColorForm";

interface IProps {
  colors: IColor[];
  selectColor: (id: string) => void;
  selectedColor: IColor | null;
  editModeColor: boolean;
  setEditModeColor: (editModeColor: boolean) => void;
  setSelectedColor: (color: IColor | null) => void;
}

const ColorDashboard: React.FC<IProps> = ({
  colors,
  selectColor,
  selectedColor,
  editModeColor,
  setEditModeColor,
  setSelectedColor,
}) => {
  return (
    <Segment>
      <Header content="Fabric Colors" />
      <Grid>
        <Grid.Column width={10}>
          <ColorList colors={colors} selectColor={selectColor} />
        </Grid.Column>
        <Grid.Column width={6}>
          {selectedColor && !editModeColor && (
            <ColorDetails
              color={selectedColor}
              setEditModeColor={setEditModeColor}
              setSelectedColor={setSelectedColor}
            />
          )}
          {editModeColor && (
            <ColorForm
              setEditModeColor={setEditModeColor}
              color={selectedColor!}
            />
          )}
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default ColorDashboard;
