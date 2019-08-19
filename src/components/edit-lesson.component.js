import React, { Component } from 'react';
import axios from 'axios';


export default class EditLesson extends Component {

  constructor(props){
    super(props);

    this.updateDOW = this.updateDOW.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.updateYogaStyle = this.updateYogaStyle.bind(this);
    this.updateURL = this.updateURL.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      dayOfTheWeek : "",
      time : 0,
      location : "",
      yogaStyle : "",
      linkToStudio : ""
    }
  }

  componentDidMount(){
    axios.get('http://localhost:1234/lessons/'+this.props.match.params.id)
      .then(res => {
        this.setState({
          dayOfTheWeek : res.data.dayOfTheWeek,
          time : res.data.time,
          location : res.data.location,
          yogaStyle : res.data.yogaStyle,
          linkToStudio : res.data.linkToStudio
        })
      })
      .catch(function(err){
        console.log('error getting lesson : ', err);
      })
  }

  updateDOW(event){
    this.setState({
      dayOfTheWeek : event.target.value
    })
  }

  updateTime(event){
    this.setState({
      time : event.target.value
    })
  }

  updateLocation(event){
    this.setState({
      location : event.target.value
    })
  }

  updateYogaStyle(event){
    this.setState({
      yogaStyle : event.target.value
    })
  }

  updateURL(event){
    this.setState({
      linkToStudio : event.target.value
    })
  }

  onSubmit(event){
    event.preventDefault();

    const lessonObj = {
      dayOfTheWeek : this.state.dayOfTheWeek,
      time : this.state.time,
      location : this.state.location,
      yogaStyle : this.state.yogaStyle,
      linkToStudio : this.state.linkToStudio
    };

    axios.post('http://localhost:1234/lessons/update/' + this.props.match.params.id, lessonObj)
      .then(res => console.log('data', res.data));

    this.props.history.push('/')
  }

  render(){
    return (
      <div>
        <div className="hero-info-img">
          <p style={{ "color" : '#ffffff'}}>Emily Thomson</p>
          <p className="hero-img-text">Teaches Yoga</p>
        </div>
        <div className="page-container">
          <h3>Update Lesson</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Day of the Week</label>
              <input type="text" className="form-control" value={this.state.dayOfTheWeek} onChange={this.updateDOW}></input>
            </div>

            <div className="form-group">
              <label>Time</label>
              <input type="number" className="form-control" value={this.state.time} onChange={this.updateTime}></input>
            </div>

            <div className="form-group">
              <label>Location</label>
              <input type="string" className="form-control" value={this.state.location} onChange={this.updateLocation}></input>
            </div>

            <div className="form-group">
              <label>Yoga Style</label>
              <input type="string" className="form-control" value={this.state.yogaStyle} onChange={this.updateYogaStyle}></input>
            </div>

            <div className="form-group">
              <label>Link to Studio</label>
              <input type="string" className="form-control" value={this.state.linkToStudio} onChange={this.updateURL}></input>
            </div>

            <div className="form-group">
              <input type="submit" value="Update Lesson" className="btn btn-primary"></input>
            </div>

          </form>
        </div>
      </div>
    )
  }
}
