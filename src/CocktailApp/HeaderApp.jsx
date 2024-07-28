
import { Link } from "react-router-dom";
import {Row, Col} from "react-bootstrap"
import React, { useState } from "react";
import bootstrap from 'bootstrap';

import './style.css'
import logo from './logo.png';


const Navbar = () => {
  return (
    <header className="header-main bg-info mt-3">
    <Row className='header_logo'>
      <Col className="d-flex align-content-center">
        <img className="logo" src={logo} />
        <div className=' ps-2 header__text'>Cocktai bar</div>
      </Col>
      <Col className="d-flex align-content-center flex-nowrap border">
      <Row xs={6} className=''>
          u<Col xs={3} className=''>IT</Col>
          <Col xs={2} className=''>EN</Col>
          <Col xs={2} className=''>ES</Col>
      </Row>
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
