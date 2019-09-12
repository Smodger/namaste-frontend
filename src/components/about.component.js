import React from 'react';

export const About = (props) => {
  return(
    <div>
      <div className="hero-info-img">
        <div className="hero-info-overlay"></div>
        <p style={{ "color" : '#ffffff'}}>Emily Thomson</p>
        <p className="hero-img-text">Teaches Yoga</p>
      </div>
      <div className="page-container">
        <h3>About Me</h3>
        <p>TAKEN FROM CURRENT SITE</p>
        <p style={{"marginTop":15}}>I was first introduced to yoga and movement work whilst training at drama school to be an actor. I found yoga a fab way of warming up, and getting my body, brain and breath ready to rehearse. But soon it started trickling into my life in general and I was practicing every day - so I thought it was about time I trained and started teaching too!</p>

        <p style={{"marginTop":15}}>I trained at Sampoorna Yoga in South Goa, India, and have returned there for an internship to further my training and practice. I have also attended workshops in anatomy, and later this year will be completing my 500 hour advanced teacher training with Jason Crandell.</p>

        <p>{"I love yoga because it is accessible to all and it is a practical way to see how we each develop in our own special ways. Some people will be awesome at backbends, others rock at arm balances whilst some are wizards of the mind and meditation. It's like everyone's their own special kind of superhero, you just need to take the time to see it – which kind are you?"}</p>

        <p style={{"marginTop":15}}>Trained primarily in vinyasa and ashtanga - my classes have a strong focus on movement and flow. Expect a strong class, often with long creative sequences and occasional 360 mandala-style rotations around the mat. And of course a fair amount of sweat.</p>

        <ul style={{"marginTop":15}}>
          <li>I teach a number of regular weekly classes around London and am also available for one-to-one private sessios, group classes, corporate hire.</li>
          <li>Available to teach Vinyasa Flow, Ashtanga, Hatha, Core Power flow.</li>
          <li>Fully accredited and insured by Yoga Alliance UK.</li>
          <li><img style={{ 'height' : 50, 'width' : 50 }} alt="Yoga alliance logo" src={require("../images/yoga-alliance-logo.png")}></img></li>
        </ul>

      </div>
    </div>
  );
}
