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
import tee from "../../images/tees-icon.png";
import teeV from "../../images/tees-v-icon.png";
import Accordion from "react-bootstrap/Accordion";
import shirtImg2 from "../../images/j.png";
import shirtImg3 from "../../images/t-v-w.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlagCheckered } from "@fortawesome/free-solid-svg-icons";

import "./AllChangePic.css";

class AllChange extends Component {
 
    state = {
        showShirt: 0,
       
     
    }

    handleShowShirt = () => {
        
        this.setState({
            showShirt: !this.state.showShirt
        })
        console.log(this.state.showShirt)
    }



    
  render() {
    return (
      <>
        <Col>
          <div className=" ">
          {this.state.showShirt ? 
                            <img src={shirtImg2} className="shirt"/> :<img src={shirtImg3} className="shirt"/>
                        } 
                           
           
          </div>
        </Col>
        <Col className="acor-menu">
        <Card className="card-text">
          <Card.Body>
            <Card.Text className="text-price">300 THB</Card.Text>
            <Card.Text className="text-approx">Approximately US $10.00</Card.Text>
          </Card.Body>
        </Card>

          <Accordion defaultActiveKey="0" className="x-Accordion">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Item type
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                  
                 <p  onClick={this.handleShowShirt}> <img src={tee} className="graphic-icon"   /></p>
  
                 <p onClick={this.handleShowShirt}><img src={teeV} className="graphic-icon"  /></p>
               
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
        </Col>
      </>
    );
  }
}

export default AllChange;
