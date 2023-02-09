import React from 'react';
//import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
//import { MarkGithubIcon } from "@react-icons/all-files/fa/FaBeer";
//<MarkGithubIcon size={16} />

function NavLinks() {

  return (
    <div>
      
      <footer className='footer'>
        
        <h3>Find me @</h3>
        <ul className='footerList'>
          <div >
            <SocialIcon className='githubicon' url="https://github.com/BelenGigante" target="_blank"/>
            <br></br>
            <a href='https://github.com/BelenGigante' target="_blank"> GitHub </a>
            </div>
            <div>
            <SocialIcon className='icon' url="https://www.linkedin.com/pulse/topics/home/" target="_blank"/>
            <br></br>
            <a href='https://www.linkedin.com/pulse/topics/home/' target="_blank"> LinkedIn </a>
            </div>
            <div>
            <SocialIcon className='icon' url="https://twitter.com/explore" target="_blank"/>
            <br></br>
            <a href='https://twitter.com/explore' target="_blank"> Twitter </a>
          </div>
        </ul>
      </footer>
    </div>
  );
}

export default NavLinks;
