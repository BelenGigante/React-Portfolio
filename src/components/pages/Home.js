import React from 'react';

export default function Home() {
  return (
    <div className='textContainer'>
    <header >
      <p className='homeHeader'>Hello! I'm </p>
    </header>
    <section>
      <h2>Belen</h2>
        <img className='profilePic' src='./assets/me2.png'></img>
      <h4>Full Stack Developer</h4>
      <p className='caption'>
        I'm a creative programmer passionate, dedicated and ready to put my skills to work!
      </p> 
      </section>
    </div>
  );
}
