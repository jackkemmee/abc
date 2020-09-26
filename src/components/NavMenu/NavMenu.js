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

import "./NavMenu.css";




class NavMenu extends Component {


  render() {
    return (
      
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
          
    );
  }
}

export default NavMenu;
