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
              <div className='WorkCard--Image relative'>
                <BackgroundImage
                  src={image}
                  alt={image}
                />
              </div>
            ))}
            <div className='WorkCard--Content'>
              {item.title && <h3 className='WorkCard--Title'>{item.title}</h3>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
