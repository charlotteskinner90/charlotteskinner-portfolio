import React from 'react'

import LazyImage from '../components/LazyImage'
import './Work.css'

export default ({ workFields }) => {
  return (
    <div className='Work'>
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
