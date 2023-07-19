import { Component } from 'react'

class Service extends Component {

  _baseUrl = 'https://jsonplaceholder.typicode.com';
  _resourseUrl = '/posts/1';
  _allResorsesUrl = '/posts'

  getResource = async () => {

    try {
      let response = await fetch(`${this._baseUrl}${this._resourseUrl}`);
      let res = await response.json();
      return res;

    } catch (err) { // cattura gli errori sia in fetch che in response.json
      console.log(err)
    }
  }

  getAllResourses = async () => {

    try {
      let response = await fetch(`${this._baseUrl}${this._allResorsesUrl}`);
      let res = await response.json();
      //return res;
      console.log(res);

    } catch (err) { // cattura gli errori sia in fetch che in response.json
      console.log(err)
    }
  }

}

export default Service;