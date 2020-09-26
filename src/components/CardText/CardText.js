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
import "./CardText.css";

class CardText extends Component {
    render() {
      return (
        <Card className="card-text">
          <Card.Body>
            <Card.Text className="text-price">300 THB</Card.Text>
            <Card.Text className="text-approx">Approximately US $10.00</Card.Text>
          </Card.Body>
        </Card>
      );
    }
  }
  export default CardText;