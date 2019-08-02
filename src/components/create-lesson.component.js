import React, { Component } from 'react';
import axios from 'axios';

export default class CreateLesson extends Component {

  constructor(props){
    super(props);

    this.onChangeDOW = this.onChangeDOW.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeYogaStyle = this.onChangeYogaStyle.bind(this);
    this.onChangeStudio = this.onChangeStudio.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      dayOfTheWeek : "",
      time : 0,
      location : "",
      yogaStyle : "",
      linkToStudio : ""
    }
  }

  onChangeDOW(event){
    this.setState({
      dayOfTheWeek : event.target.value
    })
  }

  onChangeTime(event){
    this.setState({
      time : event.target.value
    })
  }

  onChangeLocation(event){
    this.setState({
      location : event.target.value
    })
  }

  onChangeYogaStyle(event){
    this.setState({
      yogaStyle : event.target.value
    })
  }

  onChangeStudio(event){
    this.setState({
      linkToStudio : event.target.value
    })
  }

  onSubmit(event){
    //prevent default form logic
    event.preventDefault();

    console.log("Submit form : ", this.state)

    const newLesson = {
      dayOfTheWeek : this.state.dayOfTheWeek,
      time : this.state.time,
      location : this.state.location,
      yogaStyle : this.state.yogaStyle,
      linkToStudio : this.state.linkToStudio
    }

    axios.post('http://localhost:1234/lessons/addLesson', newLesson)
      .then(res => console.log(res.data));

    // reset state to blank once submitted
    this.setState({
      dayOfTheWeek : "",
      time : 0,
      location : "",
      yogaStyle : "",
      linkToStudio : ""
    })
  }

  render(){
    return (
      <div style={{marginTop : 20}}>
        <h3>Create Class</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Day of the Week</label>
            <input type="text" className="form-control" value={this.state.dayOfTheWeek} onChange={this.onChangeDOW}></input>
          </div>

          <div className="form-group">
            <label>Time</label>
            <input type="number" max="24" className="form-control" value={this.state.time} onChange={this.onChangeTime}></input>
          </div>

          <div className="form-group">
            <label>Location</label>
            <input type="text" className="form-control" value={this.state.location} onChange={this.onChangeLocation}></input>
          </div>

          <div className="form-group">
            <label>Yoga Style</label>
            <input type="text" className="form-control" value={this.state.yogaStyle} onChange={this.onChangeYogaStyle}></input>
          </div>

          <div className="form-group">
            <label>Link to Yoga Studio</label>
            <input type="text" className="form-control" value={this.state.linkToStudio} onChange={this.onChangeStudio}></input>
          </div>

          <div className="form-group">
            <input type="submit" value="Create Lesson" className="btn btn-primary"></input>
          </div>

        </form>
      </div>
    )
  }
}
