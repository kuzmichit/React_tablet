
import { Link } from "react-router-dom";
import {Row, Col} from "react-bootstrap"
import React, { useState } from "react";
import bootstrap from 'bootstrap';

import './style.css'
import logo from './logo.png';


const Navbar = () => {
  return (
    <header className="header-main bg-info d-flex">
    <Row className='header_logo'>
      <Col className="d-flex align-content-center">
        <img className="logo" src={logo} />
        <div className=' ps-2 header__text'>Cocktail bar</div>
      </Col>
      <Col className="d-flex align-content-center flex-nowrap border w-75">
          <Col xs={4} className=''>IT</Col>
          <Col xs={4} className=''>EN</Col>
          <Col xs={4} className=''>ES</Col>
      </Col>
    </Row>
  </header>
);
}

export default Navbar;

