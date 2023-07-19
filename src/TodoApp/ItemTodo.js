import React, { useState, useEffect, useRef } from 'react';

import '../TodoApp/style.css';

export const ItemTodo = (props) => {

    const { text, id, get } = props;
    const [changing, setChanging] = useState(false);
    const [inputValue, setInputValue] = useState(text);
    const inputRef = useRef(inputValue);

    const createItem = () => {

      return (
        <li
        className='item'>
        <p 
          className={ changing ? 'visually-hidden' : null }
        >{text}</p>
        <input 
          className= { changing ? null : 'visually-hidden' }
          type='text'
          // defaultValue = { inputValue } 
          onChange={ onValueChange }
          ref={ inputRef }/>
        <button className='btn btn-danger'
          type='submit'
          onClick={ () => onCorrectClick(id) }
        >Correggi</button>
      </li>
      );
    };

    const item = createItem();

    function onValueChange(e) {
      setInputValue(e.target.value);
      console.log(inputValue);
    }

    function onCorrectClick(id) {
      setChanging(!changing);
      inputRef.current.value = inputValue;
      get(id, inputValue);
    }

    return item;
}