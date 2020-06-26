import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";

interface IProps {
  openCreateFormAlu: () => void;
  openCreateFormColor: () => void;
}
const NavBar: React.FC<IProps> = ({openCreateFormAlu, openCreateFormColor}) => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
            <img src="/assets/logo.png" alt="logo" style={{marginRight: 10}}/>
            Ordering System
        </Menu.Item>
        <Menu.Item name="Aluminums" />
        <Menu.Item>
            <Button onClick={openCreateFormAlu} positive content='Create Aluminum'></Button>
        </Menu.Item>
        <Menu.Item name="Color" />
        <Menu.Item>
            <Button onClick={openCreateFormColor} positive content='Create Color'></Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
