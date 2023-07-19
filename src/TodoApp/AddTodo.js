import React, {useState} from "react";
import { hot } from 'react-hot-loader/root';

import './style.css'

export const AddTodo = (props) => {
  const [inputValue, setInputValue] = useState(' ');
  const {addItem} = props;
  
  function onValueChange(e) {
    setInputValue(e.target.value);
  }
  function onAddClick(e, inputValue) {
    addItem(inputValue);
    setInputValue('')
  }

  return (
  <div className="addtodo item">
  <input 
    type='text'
    onChange = {onValueChange}
    value={inputValue}></input>
  <button className=''
    onClick={(e)=> onAddClick(e,inputValue)}>add</button>
  </div>
  )
}