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
import shirtImg2 from "../../images/j.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ChangeShirt.css";

const TodoItem = () => {
  return (
      <div className=" ">
          <img src={shirtImg2} className="shirt" /> 
      </div>
  )
}

export default TodoItem