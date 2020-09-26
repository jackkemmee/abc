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
import shirtImg2 from "./images/j.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { faFlagCheckered } from "@fortawesome/free-solid-svg-icons";
import CardText from "./components/CardText/CardText";
import AcordianMenu from "./components/AccordionMenu/AccordionMenu";
import NavMenu from "./components/NavMenu/NavMenu";

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
          <Col>
          {this.state.showShirt = 0 ? 
                            <img src={shirtImg2} alt=""/> : <h1>No Shirt</h1>
                        }
            <img src={shirtImg2} className="shirt" />
          </Col>
          <Col className="acor-menu">
            <CardText></CardText>

            <AcordianMenu></AcordianMenu>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MenuSecondaryPointing;
