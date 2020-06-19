import React from "react";
import { Card, Image, Icon, Button } from "semantic-ui-react";
import { IAluminum } from "../../../app/models/aluminum";

interface IProps {
  aluminum: IAluminum
}
const AluminumDetails: React.FC<IProps> = ({aluminum}) => {
  return (
    <Card fluid>
      <Image src={`/assets/AluminumColors/${aluminum.aluminumName}.jpg`} wrapped ui={false} />
      <Card.Content>
      <Card.Header>{aluminum.aluminumName}</Card.Header>
      <Card.Description>{aluminum.aluminumId}</Card.Description>
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

export default AluminumDetails;
