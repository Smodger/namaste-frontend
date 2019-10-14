import React, { Component } from 'react';
import axios from 'axios';

import Bedroom from './bedroom.component'

export default class CreateRetreat extends Component {

  constructor(props){
    super(props)

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeEndDate = this.onChangeEndDate.bind(this);
    this.onChangeRetreatSummary = this.onChangeRetreatSummary.bind(this);
    this.onChangeFood = this.onChangeFood.bind(this);
    this.onChangeCar = this.onChangeCar.bind(this);
    this.onChangeTrain = this.onChangeTrain.bind(this);
    this.onChangeBookingInfoDetails = this.onChangeBookingInfoDetails.bind(this);
    this.onChangeBookingInfoUrl = this.onChangeBookingInfoUrl.bind(this);
    this.onChangeWhatIncluded = this.onChangeWhatIncluded.bind(this);
    this.onChangeBedDescription = this.onChangeBedDescription.bind(this);
    this.onChangeBedCost = this.onChangeBedCost.bind(this);
    this.onChangeBedBooking = this.onChangeBedBooking.bind(this);
    this.onChangeAccomodation = this.onChangeAccomodation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.appendBedroom = this.appendBedroom.bind(this);
    this.renderBedroom = this.renderBedroom.bind(this);

    this.state= {
      children :[],
      name : "",
      dateStart : "22/04/1989",
      dateEnd : "14/09/1988",
      retreatSummary : "",
      accomodationOverview : "",
      bedRooms : [],
      food : "",
      byCar : "",
      byTrain : "",
      bookingDetails : "",
      bookingUrl : "",
      whatsIncluded : []
    }
  }

  onChangeName(event){
    this.setState({
      name : event.target.value
    })
  }
  onChangeStartDate(event){
    this.setState({
      dateStart : event.target.value
    })
  }
  onChangeEndDate(event){
    this.setState({
      dateEnd : event.target.value
    })
  }
  onChangeRetreatSummary(event){
    this.setState({
      retreatSummary : event.target.value
    })
  }
  onChangeFood(event){
    this.setState({
      food : event.target.value
    })
  }
  onChangeCar(event){
    this.setState({
      byCar : event.target.value
    })
  }
  onChangeTrain(event){
    this.setState({
      byTrain : event.target.value
    })
  }
  onChangeBookingInfoDetails(event){
    this.setState({
      bookingDetails : event.target.value
    })
  }
  onChangeBookingInfoUrl(event){
    this.setState({
      bookingUrl : event.target.value
    })
  }
  onChangeWhatIncluded(event){
    this.setState({
      whatsIncluded : event.target.value
    })
  }

  onChangeAccomodation(event){
    this.setState({
      accomodationOverview : event.target.value
    })
  }

  onChangeBedDescription(desc){
    const newBedroom = {...this.state.bedRooms};
    // A PROBELM IS THAT THIS IS COMING THROUGH AS UNDEFINED.
    console.log('Value of input passed from bedroom.component :', desc);
    newBedroom.description = desc;

    this.setState({bedRooms : newBedroom});
  }
  onChangeBedCost(cost){
    const newBedroom = {...this.state.bedRooms};

    newBedroom.costPerPerson = cost;

    this.setState({bedRooms : newBedroom});
  }
  onChangeBedBooking(booked){
    const newBedroom = {...this.state.bedRooms};

    newBedroom.booked = booked;

    this.setState({bedRooms : newBedroom});
  }

  appendBedroom(event){
    event.preventDefault();
    let newRoom = { ...this.state.bedRooms };
    this.setState({
      bedRooms : [...this.state.bedRooms, newRoom]
    })
  }

  //will refactor bedroom component to just send room and functions.
  renderBedroom(){
    // THIS STARTS OFF AS EXPECTED. Render the bedroom component on click and you see.
    // this.state.bedRooms : [{}]
    // When user types in to description input in bedroom component
    // the Array.isArray becomes false and this.state.bedRooms
    // becomes object, { 0 : {}, description : "" }
    // WHAT I WANT this.state.bedRooms :
    //[{description : "hello", cost : 10, booked : false}, {description: "bye", cost : 11, booked : true}]
    console.log('info', Array.isArray(this.state.bedRooms), this.state.bedRooms);

    return this.state.bedRooms.map(function(room, i){
      return <Bedroom key={i} roomNum={this.state.bedRooms.length} description={this.state.bedRooms.description} cost={this.state.bedRooms.costPerPerson} booked={this.state.bedRooms.booked} onChangeBedDescription={this.onChangeBedDescription} onChangeBedCost={this.onChangeBedCost} onChangeBedBooking={this.onChangeBedBooking}></Bedroom>
    }, this)
  }

  onSubmit(event){
    //prevent default form logic
    event.preventDefault();

    console.log("Submit form : ", this.state)
    const newRetreat = {
      name : this.state.name,
      dateStart : this.state.dateStart,
      dateEnd : this.state.dateEnd,
      retreatSummary : this.state.retreatSummary,
      accomodationOverview : this.state.accomodationOverview,
      bedRooms : [{
        booked : this.state.bedRooms.booked,
        description : this.state.bedRooms.description,
        costPerPerson : this.state.bedRooms.costPerPerson
      }],
      food : this.state.food,
      byCar : this.state.byCar,
      byTrain : this.state.byTrain,
      bookingDetails : this.state.bookingDetails,
      bookingUrl : this.state.bookingUrl,
      whatsIncluded : this.state.whatsIncluded
    }

    const token = localStorage.getItem('jwtToken');

    axios.post('http://localhost:1234/retreats/addRetreat', newRetreat, {
      headers :{ Authorization : "Bearer " + token}
    })
      .then(res => console.log(res.data));

    // reset state to blank once submitted
    this.setState({
      name : "",
      dateStart : "22/04/1989",
      dateEnd : "14/09/1988",
      retreatSummary : "",
      accomodationOverview : "",
      bedRooms : [],
      food : "",
      byCar : "",
      byTrain : "",
      bookingDetails : "",
      bookingUrl : "",
      whatsIncluded : []
    })
  }

  render(){
    return (
      <div>
        <div className="hero-info-img">
          <div className="hero-info-overlay"></div>
          <div className="hero-landing-text-container">
            <p className="hero-img-text">Em Thomson</p>
            <p className="hero-img-subtext">Yoga teacher</p>
          </div>
        </div>
        <div className="page-container">
          <h3>Create a retreat</h3>
            <form onSubmit={this.onSubmit}>

              <div className="form-group">
                <label>Retreat Name</label>
                <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName}></input>
              </div>

              <div className="form-group">
                <label>Start Date (DD/MM/YYYY)</label>
                <input type="text" className="form-control" value={this.state.dateStart} onChange={this.onChangeStartDate}></input>
              </div>

              <div className="form-group">
                <label>End Date (DD/MM/YYYY)</label>
                <input type="text" className="form-control" value={this.state.dateEnd} onChange={this.onChangeEndDate}></input>
              </div>

              <div className="form-group">
                <label>Retreat summary</label>
                <input type="text" className="form-control" value={this.state.retreatSummary} onChange={this.onChangeRetreatSummary}></input>
              </div>

              <div className="form-group">
                <label>Accommodation Overview</label>
                <input type="text" className="form-control" value={this.state.accomodationOverview} onChange={this.onChangeAccomodation}></input>
              </div>

              <div className="separator-long"></div>

              <div className="bedroom-container">
                {  this.renderBedroom() }
              </div>

              <div className="text-center">
                <button className="btn-primary" onClick={this.appendBedroom}>Add bedroom</button>
              </div>

              <div className="form-group">
                <label>Food</label>
                <input type="text" className="form-control" value={this.state.food} onChange={this.onChangeFood}></input>
              </div>

              <div className="form-group">
                <label>How to get there by Car</label>
                <input type="text" className="form-control" value={this.state.byCar} onChange={this.onChangeCar}></input>
              </div>

              <div className="form-group">
                <label>How to get there by public transport</label>
                <input type="text" className="form-control" value={this.state.byTrain} onChange={this.onChangeTrain}></input>
              </div>

              <div className="form-group">
                <label>Booking information details</label>
                <input type="text" className="form-control" value={this.state.bookingDetails} onChange={this.onChangeBookingInfoDetails}></input>
              </div>

              <div className="form-group">
                <label>Booking information link (must be full url). Leave blank if you want them to email you</label>
                <input type="text" className="form-control" value={this.state.bookingUrl} onChange={this.onChangeBookingInfoUrl}></input>
              </div>

              <div className="form-group">
                <label>What's included in the cost. <strong>Separate all values by commas.</strong> Eg food, wine, car parking, pringles</label>
                <input type="text" className="form-control" value={this.state.whatsIncluded} onChange={this.onChangeWhatIncluded}></input>
              </div>

              <div className="form-group">
                <input type="submit" value="Create retreat" className="btn btn-primary"></input>
              </div>
            </form>
        </div>
      </div>
    )
  }
}
