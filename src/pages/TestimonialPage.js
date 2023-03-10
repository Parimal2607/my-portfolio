import Head from 'next/head'
import React from 'react'
import Testimonial from "./Testimonial"
function TestimonialPage() {
  return (
    <>
     <Head>
        <title>Testimonial</title>
        <meta
          name="description"
          content="Meta description for the About page"
        />
      </Head>
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
      <div className="text">
       <Testimonial/>
      </div>
    </div>
    </>
  )
}

export default TestimonialPage
