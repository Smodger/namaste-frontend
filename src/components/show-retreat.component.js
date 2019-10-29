import React, { Component } from 'react';

export default class showRetreat extends Component {

  listWhatsIncluded(){
    console.log('props', this.props);
    return this.props.retreat.whatsIncluded.map((item, i) => {
      return <li key={i}>{item}</li>
    })
  }

  listBedrooms(){
    return this.props.retreat.bedRooms.map((room, i) => {
      if(!this.props.retreat.bedRooms.booked){
        return (
          <div key={i}>
            <p>Bedroom {i+1} - {room.description} - £{room.cost}</p>
          </div>
        )
      }else{
        return (
          <div key={i}>
            <p>Bedroom {i+1} - {room.description} - £{room.cost} - <strong>BOOKED</strong></p>
          </div>
        )
      }

    })
  }

  howToBook(){
    if(this.props.retreat.bookingUrl){
      return <a href={this.props.retreat.bookingUrl}>Book here</a>
    }

    if(!this.props.retreat.bookingUrl){
      return <p>Contact me to book at <a href="mailto:emthomsonyoga@gmail.com">emthomsonyoga@gmail.com</a></p>
    }
  }

  render(){
    return (
      <div className="page-container">
        <h3 className="page-heading">{this.props.retreat.name}</h3>
        <p className="sub-heading">{this.props.retreat.dateStart} - {this.props.retreat.dateEnd}</p>

        <div className="separator-2"></div>

          <div className="shavasana">
            <h6 className="retreat-heading">Overview</h6>
            <p>{this.props.retreat.retreatSummary}</p>
          </div>

          <div className="shavasana">
            <h6 className="retreat-heading">What's Included</h6>
            <ul>
              {this.listWhatsIncluded()}
            </ul>
          </div>

          <div className="shavasana">
            <h6 className="retreat-heading">How to get there</h6>
            <p className="instruction-header">By car:</p>
            <p style={{"marginLeft" : 15}}>{this.props.retreat.byCar}</p>
            <p className="instruction-header">Public transport:</p>
            <p style={{"marginLeft" : 15}}>{this.props.retreat.byTrain}</p>
          </div>


          <div className="shavasana">
            <h6 className="retreat-heading">Accommodation</h6>
            {this.listBedrooms()}
          </div>

          <div className="shavasana">
            <h6 className="retreat-heading">Food Options</h6>
            <p>{this.props.retreat.food}</p>
          </div>

          <div className="shavasana">
            <h6 className="retreat-heading">Booking information</h6>
            <p>{this.props.retreat.bookingDetails}</p>
            {this.howToBook()}
          </div>

          <button onClick={this.props.onClick}>Back</button>
      </div>

    )
  }
}
