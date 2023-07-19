import React from "react";
import { hot } from 'react-hot-loader/root';
import Service from './service'

import './style.css'


class DayList extends React.Component {
  state = {
    dayList: {},
  }
  
  service = new Service();
  
  didComponentMount() {
    thid.getDaysList()
  }
  
  getDaysList = () => {
    
    this.setState({
      dayList: this.service.getResource()
      }) 
    console.log('get')
  }
  
  render() {
    const {dayList} = this.state;
    return (
    <ul className='dayList'>
      <li>Hertuioo</li>
    </ul>
    )
  }
}

export default hot(DayList);