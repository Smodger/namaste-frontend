import React, { Component } from 'react';

export default class Bedroom extends Component {
  constructor(props){
    super(props)

    this.handleOnChangeDescription = this.handleOnChangeDescription.bind(this);
    this.handleOnChangeCost = this.handleOnChangeCost.bind(this);
    this.handleOnChangeBooked = this.handleOnChangeBooked.bind(this);

    this.state = {
      roomNum : props.roomNum,
      description : props.description,
      cost : props.costPerPerson,
      booked : props.booked
    }
  }

  handleOnChangeDescription = (event) => {
    this.props.onChangeBedDescription(this.state.description)
  }

  handleOnChangeCost = (event) => {
    this.props.onChangeBedCost(this.state.cost)
  }

  handleOnChangeBooked = (event) => {
    this.props.onChangeBedBooking(this.state.booked)
  }

  render(){
    return (
      <div>
        <div className="form-group">
          <h4>Bedroom {this.state.roomNum}</h4>
          <label>Description</label>
          <input type="text" className="form-control" value={this.state.description} onChange={this.handleOnChangeDescription} placeholder="description"></input>
        </div>

        <div className="form-group">
          <label>Cost</label>
          <input type="number" className="form-control" value={this.state.cost} onChange={this.handleOnChangeCost}></input>
        </div>

        <div className="custom-control custom-switch">
          <input type="checkbox" className="custom-control-input" id="booked-room" value={this.state.booked}  onClick={this.handleOnChangeBooked}/>
          <label className="custom-control-label" htmlFor="booked-room">Booked</label>
        </div>
        <div className="separator-long"></div>
      </div>
    )
  }
}
