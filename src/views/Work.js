import React from 'react'

import LazyImage from '../components/LazyImage'
import './Work.css'

export default ({ workFields }) => {
  return (
    <div className='Work'>
      <div className='section'>
        <div className='container'>
          <h1>Work</h1>
        </div>
      </div>
      <div className="gallery-container">
        {workFields.map(item => (
          <>
            {item.galleryImages.map(image => (
              <LazyImage key={image} src={image} alt='LazyImage' />
            ))}
          </>
        ))}
      </div>
    </div>
  )
}
