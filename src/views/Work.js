import React from 'react'
import _sortBy from 'lodash/sortBy'
import BackgroundImage from '../components/BackgroundImage'
import './Work.css'

export default ({ workFields }) => {
  const sortedWork = _sortBy(workFields, ['date'])
      .reverse()

  return (
    <div className='Work'>
      <div className="gallery-container">
        {sortedWork.map(item => (
          <a href={item.link} target="_blank" rel="noopener noreferrer">
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
          </a>
        ))}
      </div>
    </div>
  )
}
