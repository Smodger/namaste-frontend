import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import CreateLesson from './components/create-lesson.component';
import EditLesson from './components/edit-lesson.component';
import LessonList from './components/lesson-list.component';
import Home from './components/home.component';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to='/' className='navbar-brand'>Home</Link>
            <Link to='/lessons' className='navbar-brand'>Lesson List</Link>
            <Link to='/edit/:id' className='navbar-brand'>Edit Lesson</Link>
            <Link to='/create' className='navbar-brand'>Create Lesson</Link>
          </nav>
          
          <Route path="/" exact component={Home}></Route>
          <Route path="/lessons" exact component={LessonList}></Route>
          <Route path="/edit/:id" exact component={EditLesson}></Route>
          <Route path="/create" exact component={CreateLesson}></Route>
        </div>


      </Router>
    );
  }
}

export default App;
