import React from "react";
import { hot } from 'react-hot-loader/root';
import {TodoApp} from './TodoApp/TodoApp'

class App extends React.Component {
  
  render() {
    
    return (
    
        <TodoApp/>
        
    );
  }
}

export default hot(App);