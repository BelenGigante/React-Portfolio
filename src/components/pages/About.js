import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function About() {
  return (
    <div className='textContainer'>
      <h2>About Me</h2>
      <p>
        Current student at the UNCC Full Stack Developer Bootcamp. Passionate to learn new technologies, hard working, proactive and motivated to put new knowledge to use independently or as a part of a team.
      </p>
      <p>
       During training I have developed the ability to learn and collaborate in rapidly changing environments and compositions. Worked through 500+ hours of bootcamp structure, learning JavaScript, Node.Js, React.Js, Express amongs others. Eager to face challenges to achieve lasting impacts on user experience.
      </p>
      <SocialIcon className='icon' url="https://docs.google.com/document/d/1rm8Vo2_84Ctx-t_i9pRaSq8YFwU5AKAfE99lKOXOfTE/edit?usp=sharing" target="_blank"/>
      <br></br>
      <a className='resume' href='https://docs.google.com/document/d/1rm8Vo2_84Ctx-t_i9pRaSq8YFwU5AKAfE99lKOXOfTE/edit?usp=sharing' target="_blank"> Check out my resume! </a>
     
    </div>
  );
}
