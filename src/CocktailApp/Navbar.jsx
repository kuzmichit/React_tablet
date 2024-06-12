
import { Link } from "react-router-dom";
import {Row, Col} from "react-bootstrap"
import React, { useState } from "react";

import './style.css'
import cocktail_logo from '../Images/cocktail_logo.png';


const Navbar = () => {
  return (
    <Row className="d-flex justify-content-between">
      <Col sm='4' className="">
        <img className="logo" src={cocktail_logo} />
      </Col>
      <Col sm='6' className="align-content-center">
        <Row sm='6' className="justify-content-end">
          <Col sm='2'>IT</Col>
          <Col sm='2'>EN</Col>
          <Col sm='2'>ES</Col>
        </Row>
      </Col>
       
  </Row>
);
}

export default Navbar;

//  <Container style={{'marginTop':'300px'}}>

//           <h1>
//           Hello finally culo non da
//           </h1>
//         </Container>
