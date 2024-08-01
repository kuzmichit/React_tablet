
import React from "react";
import Row from 'react-bootstrap/Row';
import {Col, Container} from 'react-bootstrap';

import {
BrowserRouter as Router,
Routes,
Route,
Link,
} from "react-router-dom";
import HeaderApp from './CocktailApp/HeaderApp.jsx';
import VirtualSlides from './CocktailApp/Virtual_slides.jsx';


class App extends React.Component {
  
  render() {
  
    const { name } = this.props;
    
    return (
      <Router>
      <Container className='container'>
          {<HeaderApp/>}
          {<VirtualSlides/>}
      </Container>
      </Router>
  )
  }
}

export default App;
