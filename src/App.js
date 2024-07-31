
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
import TmpBootStrap from './CocktailApp/tmpBootStrap.jsx';
import Slides from './CocktailApp/Slides.jsx'
import Test from './CocktailApp/test.jsx'
import VirtualSlides from './CocktailApp/Virtual_slides.jsx';


class App extends React.Component {
  
  render() {
  
    const { name } = this.props;
    
    return (
      <Router>
      <Container>
          {/*{<HeaderApp/>}*/}
          {/* <Slides/> */}
          {<VirtualSlides/>}
      </Container>
      </Router>
  )
  }
}

export default App;
