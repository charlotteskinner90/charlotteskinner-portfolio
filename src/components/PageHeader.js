import React from 'react'
import PropTypes from 'prop-types'
import './PageHeader.css'

const PageHeader = ({
  title,
  subtitle,
  large,
}) => {
  return (
    <div className='container'>
      <div className='PageHeader'>
        <div className='home-title-container'>
          <div className='home-title'>
            <h1 className='PageHeader--Title'>{title}</h1>
            <div className="PageHeader--Subtitle">
              <p>{subtitle}</p>
            </div>
          </div>
          <div className="home-img">
            <img width="300px" height="300px" src='/images/header_bg.png' alt="header" />
          </div>
        </div>
      </div>
    </div>
  )
}
PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PageHeader
