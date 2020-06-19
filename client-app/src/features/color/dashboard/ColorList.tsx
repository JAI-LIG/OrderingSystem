import React from "react";
import { Item, Button, Segment } from "semantic-ui-react";
import { IColor } from "../../../app/models/color";

interface IProps {
  colors: IColor[];
  selectColor: (id: string) => void;
}
const ColorList: React.FC<IProps> = ({ colors, selectColor }) => {
  return (
    <Segment>
      <Item.Group divided>
        {colors.map((color) => (
          <Item>
            <Item.Content>
              <Item.Header as="a" key={color.colorId}>
                {color.colorName}
              </Item.Header>
              <Item.Meta>{color.divisionId}</Item.Meta>
              <Item.Description>{color.fabricId}</Item.Description>
              <Item.Extra>
                <Button onClick={() => selectColor(color.colorId)} floated="right" content="View" color="blue" />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

export default ColorList;
