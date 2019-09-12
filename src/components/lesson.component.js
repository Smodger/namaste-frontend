import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Lesson extends Component {

  constructor(props){
    super(props)

    this.state = {
      lesson : props.lesson,

    }
  }

  handleDeleteLesson = () => {
    this.props.deleteLesson(this.state.lesson._id)
  }

  render(){
    return (
      <tr>
        <td>{this.state.lesson.dayOfTheWeek}</td>
        <td>{this.state.lesson.startHour} : {this.state.lesson.startMinutes}</td>
        <td>{this.state.lesson.location}</td>
        <td>{this.state.lesson.yogaStyle}</td>
        <td>{this.state.lesson.linkToStudio}</td>
        <td>
          <Link to={"/edit/" + this.state.lesson._id}>Edit</Link>
          <button className="btn btn-danger" onClick={this.handleDeleteLesson}>Delete</button>
        </td>
      </tr>
    )
  }
}
