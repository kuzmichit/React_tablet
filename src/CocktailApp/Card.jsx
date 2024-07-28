import Button from 'react-bootstrap/Button';
import { Card, Row, Col } from 'react-bootstrap';
import React from "react";
import img from './Slides/2x8thr1504816928.jpg';


export default (props) => {
  
  const {id, src, title, text} = props
  
  return (
    <Card 
    id = {id}
    onClick={() => console.log(id)}>
      <Card.Img variant="top" src={img} className='img'/>
      <Card.Body>
        <Card.Title>({title})</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}
