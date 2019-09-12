import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Header from './components/header.component'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      hasToken : ""
    }
  }

  render(){
    return (
      <Header></Header>
    );
  }
}

export default App;
