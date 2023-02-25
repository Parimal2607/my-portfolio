import React from 'react'
import Contact from "../pages/contact-me"

function ContactPage() {

  return (
    <>
      <div className='about-me'>

        <div className="splash">
          <div className="splash_logo">
            PS
          </div>
          <div className="splash_svg">
            <svg width="100%" height="100%">
              <rect width="100%" height="100%" />
            </svg>
          </div>
          <div className="splash_minimize">
            <svg width="100%" height="100%">
              <rect width="100%" height="100%" />
            </svg>
          </div>
        </div>
        <div className="text animated-bg-color">
          <Contact/>
        </div>
      </div>

    </>
  )
}

export default ContactPage