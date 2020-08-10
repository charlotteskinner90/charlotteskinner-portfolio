import React from 'react'

import BackgroundImage from '../components/BackgroundImage'
import './Work.css'

export default ({ workFields }) => {
  return (
    <div className='Work'>
      <div className="gallery-container">
        {workFields.map(item => (
          <div className="WorkCard">
            {item.galleryImages.map(image => (
              <div data-content={item.title} className='WorkCard--Image relative'>
                <BackgroundImage
                  src={image}
                  alt={image}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
