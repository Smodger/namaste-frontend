import React from 'react';

import stockOne from '../images/stock-1.jpg'
import stockTwo from '../images/stock-2.jpg'
import stockThree from '../images/stock-3.jpg'

export const Images = (props) => {
  return (
    <div className="image-container">
      <img className="stock-image" src={stockOne} alt="stock yoga"></img>
      <img className="stock-image" src={stockTwo} alt="stock yoga"></img>
      <img className="stock-image" src={stockThree} alt="stock yoga"></img>
    </div>
  )
}
