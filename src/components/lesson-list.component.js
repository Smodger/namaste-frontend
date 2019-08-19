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
      <Link to={"/edit/" + props.lesson._id}>Edit</Link>
    </td>
  </tr>
)

const DeleteLesson = props => (
  <td>
    <button className="btn btn-danger">Delete</button>
  </td>
)

export default class LessonList extends Component {

  constructor(props){
    super(props);
    this.state = {
      lessons : []
    };
  }

  BookingLink(props){
    if(!props.lesson.linkToStudio && props.lesson.location !== "Tooting Bec Lido"){
      return  props.lesson.linkToStudio = "Email me for booking details at emthomsonyoga@gmail.com"
    }else if(!props.lesson.linkToStudio && props.lesson.location === 'Tooting Bec Lido'){
      return props.lesson.linkToStudio = "Drop in price between £5 - £8 CONFIRM"
    }
  }

  // deleteLesson(){
  //   console.log('in delete');
  //   axios.delete('http://localhost:1234/lessons/'+this.props.match.params.id)
  //     .then(res =>{
  //       console.log('Lesson Deleted', this.props.match.params.id, this.props.match.params);
  //     })
  //     .catch(function(err){
  //       console.log('errror deleting lesson', err);
  //     })
  // }

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
    // this.deleteLesson();
  }

  fridayClasses(){
    var friday = this.state.lessons.filter(function(data, i){
      return data.dayOfTheWeek === 'Friday'
    })
    return friday.map(function(data, i){
      return <Lesson lesson={data} key={i}></Lesson>
    })
  }
  saturdayClasses(){
    var saturday = this.state.lessons.filter(function(data, i){
      return data.dayOfTheWeek === 'Saturday'
    })
    return saturday.map(function(data, i){
      return <Lesson lesson={data} key={i}></Lesson>
    })
  }
  sundayClasses(){
    var sunday = this.state.lessons.filter(function(data, i){
      return data.dayOfTheWeek === 'Sunday'
    })
    return sunday.map(function(data, i){
      return <Lesson lesson={data} key={i}></Lesson>
    })
  }
  mondayClasses(){
    var monday = this.state.lessons.filter(function(data, i){
      return data.dayOfTheWeek === 'Monday'
    })
    return monday.map(function(data, i){
      return <Lesson lesson={data} key={i}></Lesson>
    })
  }
  tuesdayClasses(){
    var tuesday = this.state.lessons.filter(function(data, i){
      return data.dayOfTheWeek === 'Tuesday'
    })
    return tuesday.map(function(data, i){
      return <Lesson lesson={data} key={i}></Lesson>
    })
  }
  wednesdayClasses(){
    var wednesday = this.state.lessons.filter(function(data, i){
      return data.dayOfTheWeek === 'Wednesday'
    })
    return wednesday.map(function(data, i){
      return <Lesson lesson={data} key={i}></Lesson>
    })
  }
  thursdayClasses(){
    var thursday = this.state.lessons.filter(function(data, i){
      return data.dayOfTheWeek === 'Thursday'
    })
    return thursday.map(function(data, i){
      return <Lesson lesson={data} key={i}></Lesson>
    })
  }


  render(){
    return (
      <div>
        <div className="hero-info-img">
          <p style={{ "color" : '#ffffff'}}>Emily Thomson</p>
          <p className="hero-img-text">Teaches Yoga</p>
        </div>
        <div className="page-container">
          <h3>Class List</h3>
          <table className="table" style={{ marginTop : 20 }}>
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
              { this.mondayClasses() }
              { this.tuesdayClasses() }
              { this.wednesdayClasses() }
              { this.thursdayClasses() }
              { this.fridayClasses() }
              { this.saturdayClasses() }
              { this.sundayClasses() }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
