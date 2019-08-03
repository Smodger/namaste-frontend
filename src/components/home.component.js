import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Home extends Component {

  render(){

    return (
      <div className="hero-landing-img">
        <p>Emily Thomson</p>
        <p>Teaches Yoga</p>
      </div>
    )
  }
}
