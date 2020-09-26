import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Grid,
  Nav,
  Image,
  Card,
  FormCheck, Alert
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import tee from "../../images/tees-icon.png";
import teeV from "../../images/tees-v-icon.png";
import Accordion from "react-bootstrap/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AccordionMenu.css";
;

class AcordianMenu extends Component {

  constructor() {
    super();
    this.handleShowShirt = this.handleShowShirt.bind(this);
    this.handleShowShirtV = this.handleShowShirtV.bind(this);
  }

  
  state = {
    showShirt: 0,
    showShirtV: 1,
    
}

handleShowShirt = () => {
  this.setState({
      showShirt: this.state.showShirt
      
  })
  console.log(this.state.showShirt);

}

handleShowShirtV = () => {
  this.setState({
    showShirtV:this.state.showShirtV
  })
  console.log(this.state.showShirtV);
}


  


    render() {
      return (
        <Accordion defaultActiveKey="0" className="x-Accordion">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Item type
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                  
                 <p onClick={this.handleShowShirt}> <img src={tee} className="graphic-icon"   /></p>
  
                 <p onClick={this.handleShowShirtV}><img src={teeV} className="graphic-icon"  /></p>
               
              </Card.Body>
            </Accordion.Collapse>
          </Card>
  
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              color
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <div className="box black"></div>
                <span className="box white"></span>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              text
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
  
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              image
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
  
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
              graphic
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      );
    }
  }

  export default AcordianMenu;