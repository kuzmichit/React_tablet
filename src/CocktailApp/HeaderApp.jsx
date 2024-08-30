
import { Link } from "react-router-dom";
import {Row, Col} from "react-bootstrap"
import React, { useState } from "react";

import './style.css'
import logo from './logo.png';


const Navbar = () => {
  return (
    <header className="header-main bg-info mt-3">
    <Row className="d-flex">
      <Col xs={6} className="d-flex align-content-center">
        <img className="logo" src={logo} />
        <div className=' ps-2 header__text'>Cocktail bar</div>
      </Col>
      <Col xs={4} className="d-flex align-items-center flex-nowrap lang">
          <Col className = 'lang-text'xs={2}>IT</Col>
          <Col className = 'lang-text'xs={2}>EN</Col>
          <Col className = 'lang-text'xs={2}>ES</Col>
      </Col>
    </Row>
  </header>
);
}

export default Navbar;

//  <Container style={{'marginTop':'300px'}}>

//           <h1>
//           Hello finally culo non da
//           </h1>
//         </Container>
