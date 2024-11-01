import React, {useState}from "react";
import Row from 'react-bootstrap/Row';
import { Col, Container } from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import HeaderApp from './CocktailApp/HeaderApp.jsx';
import TmpBootStrap from './CocktailApp/tmpBootStrap.jsx';
import NavButtons from './CocktailApp/Nav-buttons.jsx'
import Test from './CocktailApp/test.jsx'
import VirtualSlides from './CocktailApp/Virtual_slides.jsx';


class App extends React.Component {

  render() {

    const [seemoreActive, setSeemoreActive] = useState(false)
    const { name } = this.props;

    return (
      <Router>
        <div className='_container'>
          {<HeaderApp/>}
          {<VirtualSlides/>}
          {<NavButtons 
          seemoreActive={seemoreActive}
          setSeemoreActive={setSeemoreActive}
          />}
      </div>
      </Router>
    )
  }
}

export default App;