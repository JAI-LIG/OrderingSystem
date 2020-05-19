import React from "react";
import { Card, Image, Icon, Button } from "semantic-ui-react";
import { IAluminum } from "../../../app/models/aluminum";

// interface IProps {
//   aluminums: IAluminum[]
// }
const AluminumDetails = () => {
  return (
    <Card fluid>
      <Image src="/assets/placeholder.png" wrapped ui={false} />
      <Card.Content>
        <Card.Header>Alumium Color</Card.Header>
        <Card.Description>Aluminum ID</Card.Description>
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
