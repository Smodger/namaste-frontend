import React from 'react';
import { SocialIcon } from 'react-social-icons';

export const Contact = (props) => {
  return (
    <div>
      <div className="hero-info-img">
        <p style={{ "color" : '#ffffff'}}>Emily Thomson</p>
        <p className="hero-img-text">Teaches Yoga</p>
      </div>
      <div className="page-container">
        <h3>Contact</h3>
        <p>For any enquiries please contact me at: <a href="mailto:emthomsonyoga@gmail.com">emthomsonyoga@gmail.com</a>.</p>
        <p>Or check out my social media!</p>
        <div>
          <span className="social-media-icons"><SocialIcon url="http://facebook.com/emthomsonyoga"></SocialIcon></span>
          <span className="social-media-icons"><SocialIcon url="https://www.instagram.com/em_c_thomson/?hl=en"></SocialIcon></span>
        </div>
        <p>Also available for private classes, group hire or corporate events - basically if you want yoga let's chat</p>
      </div>
      <div className="contact-logo"></div>
    </div>

  )
}
