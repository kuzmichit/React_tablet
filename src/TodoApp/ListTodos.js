import React, { useState, useEffect, useRef, useContext } from "react";
import { hot } from 'react-hot-loader/root';
import dataContext from './context'

import pencil from '../Images/pencil.png';
import trash from '../Images/trash.png';
import './style.css'

export const ListTodos = (props) => {

  const [changing, setChanging] = useState(false);
  const [inputValue, setInputValue] = useState(' ');
  
  const { updateItem, disableBtn, onDeleteClick} = props;
  const context = useContext(dataContext);

  const createList = () => {

    const list = context.map((item, i) => {
      return (
        <ItemTodo
        key={i}
        className='item'
        text={item.text}
        id= {i}
        updateItem = {updateItem}
        disableBtn={disableBtn}
        disabled ={item.disabled}
        onDeleteClick={ onDeleteClick} />
        )
    } )

    return list;
}
  const ListTodo = createList();

  return (
    <ul>
  {ListTodo}
  </ul>
  )
}

const ItemTodo = (props) => {

  const { text, id, updateItem, disableBtn, disabled, onDeleteClick} = props;
  const [changing, setChanging] = useState(false);
  const [inputValue, setInputValue] = useState(text);

  const createItem = () => {
    const onValueChange = e => setInputValue(e.target.value)

    return (
      <li
        className='item'>
        <p 
          className={ changing ? 'visually-hidden' : null }
        >{text}</p>
        <input 
          className= { changing ? null : 'visually-hidden' }
          type='text'
          value={inputValue}
          
          onChange={ onValueChange }/>
        <div className='btn'>
        <button 
        disabled={disabled}
        onClick={ () => onCorrectClick(id)}> <img src={pencil} alt="edit" /> </button>
        <button onClick={ () => onDeleteClick(id)} ><img src={trash} alt="delete" /> </button>
        </div>
        
      </li>
    );
  };

  const item = createItem();

  function onCorrectClick(id) {
    setChanging(!changing);
    if(changing) updateItem(id, inputValue);
    disableBtn(id, changing);
  }
  return item;
}

