import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Grid,
  Nav,
  Image,
  Card,
  FormCheck,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { faFlagCheckered } from "@fortawesome/free-solid-svg-icons";
import CardText from "./components/CardText/CardText";
import AcordianMenu from "./components/AccordionMenu/AccordionMenu";
import NavMenu from "./components/NavMenu/NavMenu";
import ChangeShirt from "./components/ChangeShirt/ChangeShirt";
import AllChange from "./components/AllChangePic/AllChangePic";
class MenuSecondaryPointing extends Component {
  render() {
    return (
      <div className="Container">
        <Row className="row-menu">
          <Col>
            <img src={logo} className="logo" />
          </Col>
          <Col>
            <NavMenu></NavMenu>
          </Col>
        </Row>
        <Row>
          <AllChange></AllChange>
          {/* <Col>
            <ChangeShirt />
          </Col>
          <Col className="acor-menu">
            <CardText></CardText>
            <AcordianMenu></AcordianMenu>
          </Col> */}
        </Row>
      </div>
    );
  }
}

export default MenuSecondaryPointing;
