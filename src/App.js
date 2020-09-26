import React, { Component } from "react";
import { Container, Row, Col, Grid, Nav, Image, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/logo.png";
import shirtImg2 from "./images/j.png";
import Accordion from "react-bootstrap/Accordion";
import "./App.css";

class AcordianMenu extends Component {
  render() {
    return (
      <Accordion defaultActiveKey="0"  className="x-Accordion">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Click me!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Click me!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}

class MenuSecondaryPointing extends Component {
  render() {
    return (
      <div className="Container">
        <Row className="row-menu">
          <Col class="">
            <img src={logo} className="logo" />
          </Col>
          <Col>
            <Nav className="pull-left" activeKey="/home">
              <Nav.Item>
                <Nav.Link href="/home">CREATE</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">ARTIST</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">ALL PRODUCTS</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">SHOP</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">LOGIN</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                  CART
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              src={shirtImg2}
              className="shirt"
             
            />
          </Col>
          <Col className="acor-menu">
             <AcordianMenu ></AcordianMenu>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MenuSecondaryPointing;
