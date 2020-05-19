import React from "react";
import { Item, Image, Button, Label, Segment, Header } from "semantic-ui-react";
import { IAluminum } from "../../../app/models/aluminum";

interface IProps {
  aluminums: IAluminum[];
}
const AluminumList: React.FC<IProps> = ({ aluminums }) => {
  return (
    <Segment clearing>
      {aluminums.map((aluminum) => (
        <Item.Group divided>
          <Item key={aluminum.aluminumId}>
            <Item.Content>
              <Item.Header as="a">{aluminum.aluminumName}</Item.Header>
              <Item.Description>
                <Image src="" />
              </Item.Description>
              <Item.Extra>
                <Button floated="right" content="View" color="blue" />
                <Label basic content="Label content" />
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      ))}
    </Segment>
  );
};

export default AluminumList;
