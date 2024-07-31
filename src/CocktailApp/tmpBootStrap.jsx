import './style.css'
import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import bootstrap from 'bootstrap';

const TmpBootStrap= () => {
  return (
    <Container>
    <Row >
      <Col>
        <Col>z0</Col>
        <Col>z0</Col>
      </Col>
      <Col>z1</Col>

          <Col className='primary-color'>IT</Col>
          <Col>EN</Col>
          <Col>ES</Col>
      </Row>
       
  </Container>
  );
}

export default TmpBootStrap;