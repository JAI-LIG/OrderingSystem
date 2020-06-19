import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import { IColor } from "../../../app/models/color";

interface IProps {
  color: IColor
}

const ColorDetails: React.FC<IProps> = ({color}) => {
  return (
    <Card fluid>
      <Image src="/assets/placeholder.png" wrapped ui={false} />
      <Card.Content>
        <Card.Header>{color.colorName}</Card.Header>
        <Card.Meta>
          <span>{color.colorId}</span>
          <span>{color.fabricId}</span>
        </Card.Meta>
        <Card.Description>{color.divisionId}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button basic color="blue" content="Edit" />
          <Button basic color="grey" content="Cancel" />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default ColorDetails;
