import Link from 'next/link'
import React from 'react'


function Nav() {
  return (
    <div>
       <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
      <label for="menu-icon"></label>
      <nav className="nav">
        <ul className="pt-5">
          <li><Link href="/Navbar">Home</Link></li>
          <li><Link href="/about-me">About</Link></li>
          <li><Link href="/Testimonial">Testimonial</Link></li>
          <li><Link href="/ContactPage">Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav