import { Card, Row, Col, Button } from 'react-bootstrap';
import React from "react";
import bootstrap from 'bootstrap';

const NavButtons = () => {
  //for(const key in window) {console.log(key)}
 // console.log(window.screen,'....')

  //finire style, aggiungere logica 
  return (
  <div 
  className='btn-group fixed-bottom nav-buttons' 
  role='group'>
    <button className='btn btn-info' id='btnPrev'>Precedente</button>
    <button className='btn btn-info' id='btnNext'>Successivo</button>
  </div>)
}

export default NavButtons;