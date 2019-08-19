import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Retreat = props => (
  <Link to={'/retreats/' + props.retreat._id}>
    <div style={{ padding: 20, display: "inline-block"}}>
      <div className="retreat-thumbnail"></div>
      <div className="retreat-text">
        <p>{props.retreat.name}</p>
        <p>{props.retreat.dateStart} - {props.retreat.dateEnd}</p>
      </div>
    </div>
  </Link>

)


export default class ListRetreats extends Component {
  constructor(props){
    super(props)

    this.state = {
      retreats : []
    }
  }

  componentDidMount(){
    this.getRetreats();
  }

  getRetreats(){
    axios.get('http://localhost:1234/retreats')
      .then(res => {
        this.setState({ retreats : res.data});
      })
      .catch(function(err){
        console.log("error getting retreats", err);
      })
  }


  retreatList(){
    return this.state.retreats.map(function(currentRetreat, i){
      return <Retreat retreat={currentRetreat} key={i}></Retreat>
    });
  }

  render(){
    return (
      <div>
        <div className="hero-info-img">
          <p style={{ "color" : '#ffffff'}}>Emily Thomson</p>
          <p className="hero-img-text">Teaches Yoga</p>
        </div>
        <div className="all-retreats-container">
          <h3>Yoga retreats</h3>
          { this.retreatList() }
        </div>
      </div>
    )
  }
}
