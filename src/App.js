import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from './CocktailApp/Navbar'
import Main from "./CocktailApp/main";

class App extends React.Component {
  
  render() {
    
    return (
      <Container className="p-3">
        <header>
          <Navbar />
        </header>
      </Container>
    );
  }
}

export default App;