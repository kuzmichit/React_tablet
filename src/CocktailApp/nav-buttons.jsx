import { Card, Row, Col, Button } from 'react-bootstrap';
import React from "react";
import bootstrap from 'bootstrap';

const NavButtons = () => {

//finire style, aggiungere logica 
  return (<Row className='ms-auto me-auto w-75 d-flex justify-content-around'>
    <Button variant="primary" size="lg" id='btnPrev'>Precedente</Button>
    <Button variant="primary" size="lg" id='btnNext'>Successivo</Button>
  </Row>
  )
}

export default NavButtons;