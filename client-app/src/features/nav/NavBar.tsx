import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";

const NavBar = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
            <img src="/assets/logo.png" alt="logo"/>
            Ordering System
        </Menu.Item>
        <Menu.Item name="Aluminums" />
        <Menu.Item>
            <Button positive content='Create Aluminum'></Button>
        </Menu.Item>
        <Menu.Item name="Color" />
        <Menu.Item>
            <Button positive content='Create Color'></Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
