import Button from 'react-bootstrap/Button';
import { Card, Row, Col } from 'react-bootstrap';
import React from "react";
import img from './Slides/2x8thr1504816928.jpg';


export default (props) => {
  
  const {src, title, text} = props
  
  return (
  <div className="card test">
    <img src={src} className="card-img-top card-img" alt={title}/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">{text}</p>
    </div>
  </div>
  );
}
