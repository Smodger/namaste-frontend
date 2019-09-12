import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import CreateLesson from './create-lesson.component';
import EditLesson from './edit-lesson.component';
import LessonList from './lesson-list.component';
import {About} from './about.component';
import {Contact} from './contact.component';
import Home from './home.component';
import CreateRetreat from './create-retreat.component';
import ListRetreats from './retreat-list.component';
import Signup from './signup.component'

export default class Header extends Component {
  render(){
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg">
            <Link to='/' className='navbar-brand'>Home</Link>
            <Link to='/lessons' className='navbar-brand'>Lesson List</Link>
            <Link to='/create-lesson' className='navbar-brand'>Create Lesson</Link>
            <Link to='/about' className='navbar-brand'>About Me</Link>
            <Link to='/contact' className='navbar-brand'>Contact</Link>
            <Link to='/create-retreat' className='navbar-brand'>Create Retreat</Link>
            <Link to='/list-retreats' className='navbar-brand'>Show Retreats</Link>
          </nav>
        </div>

        <Route path="/" exact component={Home}></Route>
        <Route path="/lessons" component={LessonList}></Route>
        <Route path="/edit/:id" component={EditLesson}></Route>
        <Route path="/create-lesson" component={CreateLesson}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/create-retreat" component={CreateRetreat}></Route>
        <Route path="/list-retreats" component={ListRetreats}></Route>
        <Route path="/signup" component={Signup}></Route>

      </Router>
    )
  }
}
