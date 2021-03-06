import React from 'react'
import './Education.css'

export default () => {
  return (
    <div className='Education'>
      <div className='section'>
        <h2 style={{ textAlign: 'center', textTransform: 'uppercase', textDecoration: 'double underline', marginBottom: '10px' }}>Education</h2>
        <div className='container'>
            <h3>Code Institute</h3>
            <p className="info">Diploma in Full Stack Web Development (1st Class) <span>•</span> <em className="date">July 2019</em></p>
            <p>
              I studied part-time for this diploma whilst working full-time as a junior software developer.
              The course was portfolio based, focused on building a solid stack of projects to show prospective employers.
              While studying the course I learned the following technologies:
            </p>
            <ul className="tech-list">
              <li>CSS (& SASS)</li>
              <li>JavaScript</li>
              <li>MongoDB</li>
              <li>PostgresQL</li>
              <li>SQL</li>
              <li>Python (Flask & Django frameworks)</li>
              <li>Heroku deployment</li>
              <li>AWS</li>
            </ul>
          </div>
      </div>
    </div>
  )
}
