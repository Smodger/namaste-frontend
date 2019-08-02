import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Lesson = props => (
  <tr>
    <td>{props.lesson.dayOfTheWeek}</td>
    <td>{props.lesson.time}</td>
    <td>{props.lesson.location}</td>
    <td>{props.lesson.yogaStyle}</td>
    <td>{props.lesson.linkToStudio}</td>
    <td>
      <Link to={"/edit/"+props.lesson._id}>Edit</Link>
    </td>
  </tr>
)

export default class LessonList extends Component {

  constructor(props){
    super(props);

    this.state = {
      lessons : []
    };
  }

  getLessons(){
    axios.get('http://localhost:1234/lessons')
      .then(res => {
        this.setState({ lessons : res.data});
      })
      .catch(function(err){
        console.log("error getting lessons", err);
      })
  }

  componentDidMount(){
    this.getLessons();
  }

  componentDidUpdate(){
    this.getLessons();
  }

  lessonList(){
    return this.state.lessons.map(function(data, i){
      return <Lesson lesson={data} key={i}></Lesson>
    });
  }

  render(){
    return (
      <div>
        <h3>Class List</h3>
        <table className="table table-striped" style={{ marginTop : 20 }}>
          <thead>
            <tr>
              <th>Day of the Week</th>
              <th>Time</th>
              <th>Location</th>
              <th>Yoga Style</th>
              <th>Link to yoga studio</th>
            </tr>
          </thead>
          <tbody>
            { this.lessonList() }
          </tbody>
        </table>
      </div>
    )
  }
}
