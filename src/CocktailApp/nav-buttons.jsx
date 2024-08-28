import { Card, Row, Col, Button } from 'react-bootstrap';
import React from "react";

const NavButtons = () => {

finire style, aggiungere logica 
  return ( <Row>
    <Col><Button type='button' id='btnPrev'>Precedente</Button></Col>
    <Col><Button type="button" id='btnNext'>Successivo</Button></Col>
  </Row>
  )
}

export default NavButtons;