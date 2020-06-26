import React from "react";
import { Card, Image, Icon, Button } from "semantic-ui-react";
import { IAluminum } from "../../../app/models/aluminum";

interface IProps {
  aluminum: IAluminum;
  setEditModeAlu: (editModeAlu: boolean) => void;
  setSelectedAluminum: (aluminum: IAluminum | null) => void;
}
const AluminumDetails: React.FC<IProps> = ({
  aluminum,
  setEditModeAlu,
  setSelectedAluminum,
}) => {
  return (
    <Card fluid>
      <Image
        src={`/assets/AluminumColors/${aluminum.aluminumName}.jpg`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{aluminum.aluminumName}</Card.Header>
        <Card.Description>{aluminum.aluminumId}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button
            onClick={() => setEditModeAlu(true)}
            basic
            color="blue"
            content="Edit"
          />
          <Button
            onClick={() => setSelectedAluminum(null)}
            basic
            color="grey"
            content="Cancel"
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default AluminumDetails;
