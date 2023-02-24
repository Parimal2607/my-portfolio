import React from 'react'
import FollowMe from './FollowMe'

import MyInfo from './MyInfo'
import Nav from './Nav'

function AboutMe() {
  return (
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
      <div className="align-items-center d-flex text animated-bg-color">
       <Nav/>
       <MyInfo/>
       <FollowMe/>
      </div>
    </div>
  )
}

export default AboutMe