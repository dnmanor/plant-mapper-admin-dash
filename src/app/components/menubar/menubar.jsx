import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";

import './menubar.css'

const MenuBar = () => {
  return (
    <Container class="menubar">
      <Navbar bg="light" variant="light" fixed="top">
        <Navbar.Brand href="/">PLANT MAPPER</Navbar.Brand>
        <Nav className="mr-auto navigation-link">
          <Nav.Link href="#home">Collect Data</Nav.Link>
          <Nav.Link href="#features">Contribute</Nav.Link>
          <Nav.Link href="#pricing">Feedback</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Sci/Com Name"
            className="mr-sm-2 search-input"
          />
          <Button variant="success">Find plant</Button>
        </Form>
      </Navbar>
    </Container>
  );
};

export default MenuBar;
