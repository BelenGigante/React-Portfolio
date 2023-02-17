import React from 'react';
import { SocialIcon } from 'react-social-icons';


export default function Blog() {
  return (
    <div className='textContainer'>
      <h2>Portfolio</h2>
      <div className='portfolioLinks'>
      <section>
      <a href='https://github.com/BelenGigante/E-Commerce-Back-End.git' target="_blank">E-commerce Back End (GitHub)</a>
      <div>
      <img className='portfolioImg' src='./assets/e-commerce.png'></img>
      </div>
      </section>
      <section>
      <a href='https://github.com/NewDev2298/music-player-app.git' target="_blank">Music Playllist</a>
      <a href='https://fierce-caverns-99507.herokuapp.com/' target="_blank"> Deployed URL</a>
      <div>
      <img className='portfolioImg' src='./assets/seo-refactor.png'></img>
      </div>
      </section>
      <section>
      <a href='https://github.com/BelenGigante/password.git' target="_blank">Password Generator</a>
      <a href='https://belengigante.github.io/password/' target="_blank"> Deployed URL</a>
      <div>
      <img className='portfolioImg' src='./assets/password.png'></img>
      </div>
      </section>
      <section>
      <a href='https://github.com/BelenGigante/weather.git' target="_blank">Weather Forecast</a>
      <a href='https://belengigante.github.io/weather/' target="_blank"> Deployed URL</a>
      <div>
      <img className='portfolioImg' src='./assets/weather.png'></img>
      </div>
      </section>
      <section>
      <a href='https://github.com/BelenGigante/cuisine-meets-cocktails.git' target="_blank">Cuisine meets Cocktails</a>
      <a href='https://belengigante.github.io/cuisine-meets-cocktails/' target="_blank"> Deployed URL</a>
      <div>
      <img className='portfolioImg' src='./assets/cuisine.png'></img>
      </div>
      </section>
      <section>
      <a href='https://github.com/BelenGigante/Note-Taker-App.git' target="_blank">Note Taker</a>
      <a href='https://mighty-tundra-41857.herokuapp.com/' target="_blank"> Deployed URL</a>
      <div>
      <img className='portfolioImg' src='./assets/noteapp.png'></img>
      </div>
      </section>
      </div>
      </div>
  );
}
