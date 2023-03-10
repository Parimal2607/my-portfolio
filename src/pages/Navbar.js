import React from 'react'
import Nav from './Nav'


function Navbar() {
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
          <div className='my-navbar'>
            {/* <a href="#" className="logo" target="_blank">
        <img src="https://assets.codepen.io/1462889/fcy.png" alt="" />
      </a> */}
            <Nav />

            <div className="section-center content">
              <h1 className="mb-0 ">Hello, I&apos;m Parimal Sharma.<br />I&apos;m Frontend Developer.</h1>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Navbar
