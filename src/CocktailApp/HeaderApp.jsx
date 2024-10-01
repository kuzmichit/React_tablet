import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap"
import React, { useState } from "react";

import './style.css'
import logo from './logo.png';


const Navbar = () => {
  
  const languages = {en: 'EN', es: 'ES', it: 'IT'};
  const [lang, setLang] = useState([languages.en]);
  const onLangClick = e => {
    const content = e.target.textContent.toLowerCase();
    console.log(content)
    setLang(languages[content])
  }
  
  return (
    <header className="header-main bg-info">
    <Row className="d-flex">
      <Col xs={6} className="d-flex align-content-center">
        <img className="logo" src={logo} />
        <div className='ms-3 header__text'>Cocktail bar</div>
      </Col>
     <Col>
     <div className="dropdown h-100 d-flex justify-content-end align-content-center me-2">
  <button className="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {lang}
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item text-primary"
    href="#" onClick={ (e)=> onLangClick(e)}>{languages.en}</a></li>
    <li><a className="dropdown-item text-primary" 
    href="#" onClick={ (e)=> onLangClick(e)}>{languages.es}</a></li>
    <li><a className="dropdown-item text-primary" 
    href="#"onClick={ (e)=> onLangClick(e)}>{languages.it}</a></li>
  </ul>
</div>
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