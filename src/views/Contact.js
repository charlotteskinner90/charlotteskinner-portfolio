import React, { useEffect} from 'react'
import { MapPin, Mail } from 'react-feather'
import ReactGA from 'react-ga'
import PageHeader from '../components/PageHeader'
import EnquiryFormSimpleAjax from '../components/EnquiryFormSimpleAjax'
import './Contact.css'

export default ({ fields }) => {
  const { title, subtitle, address, email } = fields

  useEffect(() => {
    ReactGA.pageview('/contact');
  }, [])

  return (
    <div className="Contact">
      <PageHeader
        title={title}
        subtitle={subtitle}
      />
      <div className="section Contact--Section1">
        <div className="container Contact--Section1--Container">
          <div className="Contact--Details">
            {address && (
              <a
                className="Contact--Details--Item"
                href={`https://www.google.com/maps/search/${encodeURI(
                  address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin /> {address}
              </a>
            )}
            {email && (
              <a className="Contact--Details--Item" href={`mailto:${email}`}>
                <Mail /> {email}
              </a>
            )}
          </div>

          <div>
            <EnquiryFormSimpleAjax name="Simple Form Ajax" />
          </div>
        </div>
      </div>
    </div>
  )
}
