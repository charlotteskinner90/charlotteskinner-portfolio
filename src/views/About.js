import React from 'react'
import './About.css'

export default () => {
  return (
    <div className='About'>
      <div>
        <div className='about-bg' title="Image art by https://undraw.co/"></div>
          <div className='about-container'>
            <h3>What do I do?</h3>
            <p>I am a skilled Full Stack Developer with a wealth of diverse life and technical experience that I bring to every project.</p>
            <h3>How do I do it?</h3>
            <p>I work quickly and effectively in getting things built and working across the stack.</p>
            <p>I work closely with clients to ensure their aims and expectations are met.</p>
            <h3>Why hire me?</h3>
            <p>I am an excellent communicator who thrives in bright and enthusiastic teams, and I'm also a self starter when working solo.</p>
            <p>I know that the aesthetics of effective design combined with application speed, security and reliability combine to create a great user experience.</p>
          </div>
        </div>
        <div class="container">
          <div className="skill-icons">
            <i class="devicon-html5-plain-wordmark"></i>
            <i class="devicon-css3-plain-wordmark"></i>
            <i class="devicon-javascript-plain"></i>
            <i class="devicon-react-original"></i>
            <i class="devicon-django-plain"></i>
            <i class="devicon-python-plain-wordmark"></i>
            <i class="devicon-postgresql-plain-wordmark"></i>
            <i class="devicon-mongodb-plain-wordmark"></i>
          </div>

          <div class="bar front expert" data-skill="HTML"></div>
          <div class="bar front expert" data-skill="CSS"></div>
          <div class="bar front expert" data-skill="Javascript"></div>
          <div class="bar front expert" data-skill="ReactJS"></div>
          <div class="bar front advanced" data-skill="React Native"></div>
          <div class="bar front advanced" data-skill="Redux"></div>
          <div class="bar back intermediate" data-skill="Python (Django/Flask)"></div>
          <div class="bar back intermediate" data-skill="PostgreSQL / MongoDB"></div>
      </div>
    </div>
  )
}
