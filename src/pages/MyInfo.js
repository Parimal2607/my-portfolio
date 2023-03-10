import React, { useEffect } from 'react'
import AnimatedBg from './AnimatedBg';
import ProfileImage from "../assets/images/profile.jpeg"
import DownloadImage from "../assets/images/download.svg"
import { Icon } from '@iconify/react';

import Image from 'next/image';
function MyInfo() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('cv.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'cv.pdf';
        alink.click();
      })
    })
  }
  // useEffect(() => {
  //   const body = document.querySelector('#root');
  //   body.scrollIntoView({
  //     behavior: 'smooth'
  //   }, 500)

  // }, []);
  return (
    <>
      <AnimatedBg />
      <div className='container'>
        <div className='my-info'>
          <div className="card-container mx-auto  ">
            <span className="pro" onClick={onButtonClick} role="button"><Image src={DownloadImage} alt="download" /></span>
            <Image className="round" src={ProfileImage} alt="user" />
            <h3>Parimal Sharma</h3>
            <h6>India</h6>
            <p>User interface designer and <br /> front-end developer</p>
            <div className="skills">
              <h6>Skills</h6>
              <ul>
                <li>UI / UX</li>
                <li>Front End Development</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>React</li>
                {/* <li>Node</li> */}
              </ul>
            </div>
          </div>
          <div className="share">
        <span>Follow Me</span>

        <nav>
          <a href="https://instagram.com/parimal_sharma_?igshid=ZDdkNTZiNTM="><Icon icon="ri:instagram-line" /></a>
          <a href="https://www.linkedin.com/in/parimal-sharma-2521561b1"><Icon icon="carbon:logo-linkedin" /></a>
          <a href="https://github.com/Parimal2607"><Icon icon="bi:github" /></a>
        </nav>
      </div>
        </div>
       
      </div>

    </>
  )
}

export default MyInfo
