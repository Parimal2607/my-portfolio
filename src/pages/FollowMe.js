import { Icon } from '@iconify/react';
import React from 'react'

function FollowMe() {
  // const share = document.querySelector('.share');

  // setTimeout(() => {
  //   share.classNameList.add("hover");
  // }, 1000);

  // setTimeout(() => {
  //   share.classNameList.remove("hover");
  // }, 3000);
  return (
    <div>
      <div className="share">
        <span>Follow Me</span>

        <nav>
          <a href="#"><Icon icon="ri:instagram-line" /></a>
          <a href="#"><Icon icon="carbon:logo-linkedin" /></a>
          {/* <a href="#"><Icon icon="mdi:google" /></a> */}
          <a href="#"><Icon icon="bi:github" /></a>
        </nav>
      </div>
    </div>
  )
}

export default FollowMe