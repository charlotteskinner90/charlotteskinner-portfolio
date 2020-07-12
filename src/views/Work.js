import React from 'react'

import LazyImage from '../components/LazyImage'
import Content from '../components/Content.js'
import './Work.css'

export default ({ fields }) => {
  const { title, image1, image2, section2 } = fields
  return (
    <div className='Work'>
      <div className='section'>
        <div className='container'>
          <h1>{title}</h1>
        </div>
      </div>
      <div className='section'>
        <div className='container'>
          <Content source={image1} />
        </div>
      </div>
      <div className='section'>
        <div className='container'>
          <Content source={section2} />
          <p>The image below is a {'<LazyImage />'}</p>
          <LazyImage src={image2} alt='LazyImage' />
        </div>
      </div>
    </div>
  )
}
