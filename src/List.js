import { hot } from 'react-hot-loader/root';
import React, { useState, useEffect } from "react";
import Service from './service'

const List = () => {

  const service = new Service();
  const arr = [11, 22, 33]
  const a = 'Hiiiii';

  const [resource, setResource] = useState('');

  function cr() {
    setResource(
      service.getResource()
      .then(res => Object.values(res))
      .then(res => { return res }))
  }
  



  return (
    <>
    <h2>Hello Boss: {'fff'}</h2>
    <button onClick={cr}>
      Hello 
    </button>
    <Test test={'GoGo'}/>
    </>
  )
}

const Test = (props) => {
  return (
    <>
    <h2>New rest</h2>
    <p>{props.test}</p>
    </>)
}

export default hot(List);