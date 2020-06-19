import React from "react";
import { Item, Image, Button, Label, Segment, Header } from "semantic-ui-react";
import { IAluminum } from "../../../app/models/aluminum";

interface IProps {
  aluminums: IAluminum[];
  selectAluminum: (id: string) => void;
}
const AluminumList: React.FC<IProps> = ({ aluminums, selectAluminum }) => {
  return (
    <Segment clearing>
      <Item.Group divided>
        {aluminums.map((aluminum) => (
          <Item key={aluminum.aluminumId}>
            <Item.Content>
              <Item.Header as="a">{aluminum.aluminumName}</Item.Header>
              <Item.Description>
                <Image src="" />
              </Item.Description>
              <Item.Extra>
                <Button
                  onClick={() => selectAluminum(aluminum.aluminumId)}
                  floated="right"
                  content="View"
                  color="blue"
                />
                <Label basic content={aluminum.aluminumId} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

export default AluminumList;
