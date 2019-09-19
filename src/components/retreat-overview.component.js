import React , { Component } from 'react';

export default class RetreatOverview extends Component {

  constructor(props){
    super(props)

    this.state = {
      retreat : props.retreat
    }
  }

  render(){
    return (
      <div style={{ padding: 20, display: "inline-block"}} onClick={this.props.onClick}>
        <div className="retreat-thumbnail"></div>
        <div className="retreat-text">
          <p>{this.state.retreat.name}</p>
          <p>{this.state.retreat.dateStart} - {this.state.retreat.dateEnd}</p>
        </div>
      </div>
    )
  }
}
