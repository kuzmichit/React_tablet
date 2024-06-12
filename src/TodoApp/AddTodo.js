import React, {useState} from "react";

import './style.css'
import add from '../Images/add.png';

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
  <button className='add'
    onClick={(e)=> onAddClick(e,inputValue)}> <img src={add} alt="add" /> </button>
  </div>
  )
}