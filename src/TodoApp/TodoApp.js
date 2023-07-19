import React, { useState, useEffect, useContext, createContext } from "react";
import { ListTodos } from './ListTodos';
import { AddTodo } from './AddTodo';
import dataContext from './context'

import './style.css'

export const TodoApp = () => {

  const {Provider} = dataContext;
  
  const [list, setList] = useState( [{text:'Fare qualcosa', disabled: false}, {text:'Fare qualcosa2', disabled: false}, {text:'Fare qualcosa 3', disabled: false}] );

  function updateItem(id, text) {
    const newList = [...list];
    newList[id].text = text;
    setList(newList);
  }
  
  function addItem(text) {
    const newList = [...list];
    newList.push(text);
    setList(newList);
  }
  function disableBtn(id, changing) {
    const newList = [...list];
    newList.map((item, i) => {
      if(id === i) return;
      item.disabled = true;
    } )
    setList(newList);
    console.log(newList);
  }
  
  return (
    <div className='wrapper'>
      <h1>
          Todo list
      </h1>
      <Provider value={list}>
      <ListTodos 
        updateItem = { (id, text) => updateItem(id, text)}
        List={ list }
        disableBtn={(id, changing)=> disableBtn(id, changing)}
        />
      <AddTodo addItem={ addItem }/>
      </Provider>
    </div>
  );
};