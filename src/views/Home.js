import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import PageHeader from '../components/PageHeader'
import './Home.css'
import About from './About'
import Work from './Work'
import Testimonials from './Testimonials'

export default ({ workFields }) => {
  useEffect(() => {
    ReactGA.pageview('/');
  }, [])

  return (
    <>
      <main className='Home'>
        <PageHeader
          title="Hi, I'm Charlotte"
          subtitle="Brighton-based Full Stack Developer"
        />
        <About />
      </main>
      <Work workFields={workFields} />
      <Testimonials />
    </>
  )
}
