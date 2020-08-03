import React from 'react'

import PageHeader from '../components/PageHeader'
import './Home.css'
import About from './About'
import Work from './Work'
import Education from './Testimonials'
import Testimonials from './Education'

export default ({ fields, aboutFields, workFields }) => {
  const { title, subtitle, featuredImage } = fields
  return (
    <>
      <main className='Home'>
        <PageHeader
          title={title}
          subtitle={subtitle}
          backgroundImage={featuredImage}
        />
        <About />
      </main>
      <Work workFields={workFields} />
      <Education />
      <Testimonials />
    </>
  )
}
