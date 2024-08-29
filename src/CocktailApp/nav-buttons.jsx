import { Card, Row, Col, Button } from 'react-bootstrap';
import React from "react";

const NavButtons = () => {

//finire style, aggiungere logica 
  return ( <Row>
    <Col className='w-50 color-primary btn-light'><Button className='btn-light w-50' type='button' id='btnPrev'>Precedente</Button></Col>
    <Col><Button type="button" id='btnNext'>Successivo</Button></Col>
  </Row>
  )
}

export default NavButtons;