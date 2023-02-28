import { Icon } from '@iconify/react'
import React from 'react'


function htmlemail() {
  return (
    <div>
      <div className='email-template'>
        <div className='email-header'>
          <h1>Hello I'm Parimal Sharma Frontend Developer</h1>
        </div>
        <div className='email-content container my-4'>
          <p>Front-end developers are the coders of all the user-facing elements of websites, web applications, and mobile applications. They interpret the needs of the company and its customers and create easy-to-use, interactive web apps. Front-end developers must be adept at both programming languages and design techniques.</p>
          <p>Here is my Portfolio link <a href='#'>portfolio link</a></p>
          <p className='text-from-sender'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <div className='resume'>
            <p>you can download My resume on button click</p>
            <button class="buttonDownload">hello</button>
          
          </div>
        </div>
        <footer className='position-absolute bottom-0 w-100'>
          <div className='email-footer'>
            <div className='footer-content'>
              <p>Follow me on</p>
              <div className='social-link'>
                <a href="https://instagram.com/parimal_sharma_?igshid=ZDdkNTZiNTM="><Icon icon="basil:instagram-outline" color="white" width="40" height="40" /></a>
                <a href="https://www.linkedin.com/in/parimal-sharma-2521561b1"><Icon icon="tabler:brand-linkedin" color="white" width="40" height="40" /></a>
                <a href="https://github.com/Parimal2607"><Icon icon="akar-icons:github-fill" color="white" width="40" height="40" /></a>
              </div>
            </div>
          </div>
        </footer>
      </div >
    </div >
  )
}

export default htmlemail