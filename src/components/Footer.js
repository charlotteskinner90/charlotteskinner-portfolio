import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default ({ globalSettings, socialSettings, navLinks }) => (
  <footer className='Footer'>
    <div className='container taCenter'>
      <ul className="social-links">
        <li><a href="https://github.com/charlotteskinner90"><FontAwesomeIcon icon={faGithub} /></a></li>
        <li><a href="https://twitter.com/CSkinner90"><FontAwesomeIcon icon={faTwitter} /></a></li>
        <li><a href="https://www.linkedin.com/in/charlotteskinner90"><FontAwesomeIcon icon={faLinkedin} /></a></li>
      </ul>
      <span>© 2020 All rights reserved.</span>
    </div>
  </footer>
)
