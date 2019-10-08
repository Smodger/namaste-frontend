import React, { Component } from 'react';

export default class showRetreat extends Component {

  listWhatsIncluded(){
    return this.props.retreat.whatsIncluded.map((item, i) => {
      return <li key={i}>{item}</li>
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
      <div>
        <h3>{this.props.retreat.name}</h3>
        <p>{this.props.retreat.dateStart} - {this.props.retreat.dateEnd}</p>
        <div className="separator"></div>

        <h6>Overview</h6>
        <p>{this.props.retreat.retreatSummary}</p>
        <h6>What's Included</h6>
        <ul>
          {this.listWhatsIncluded()}
        </ul>

        <h6>How to get there</h6>
        <p>By car:</p>
        <p>{this.props.retreat.byCar}</p>
        <p>Other transport</p>
        <p>{this.props.retreat.byTrain}</p>

        <div>ADD HOUSING STUFF</div>

        <div>
          <h6>Food Options</h6>
          <p>{this.props.retreat.food}</p>
        </div>

        <div>
          <h6>Booking information</h6>
          <p>{this.props.retreat.bookingDetails}</p>
          {this.howToBook()}
        </div>


        <button onClick={this.props.onClick}>Back</button>
      </div>

    )
  }
}
