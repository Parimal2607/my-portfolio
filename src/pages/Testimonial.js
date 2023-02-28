import React, { useEffect } from 'react'
import AnimatedBg from './AnimatedBg'
import Image1 from "../assets/images/UiDev.jpg"
import Image2 from "../assets/images/ImgMe.jpg"
import Image3 from "../assets/images/12.png"
import Nav from './Nav'
import Image from 'next/image'
const Data = [
  {
    id: 1,
    description: "Parimal is great at Choosing the structure and appearance of web pages. He can look after the design conclusions depending on guaranteeing an optimistic user understanding. He is great at Adding new features to improve the user experience. Parimal is great at ensuring that web design is mobile-friendly",
    img:  Image1 ,
    name: "Harsh Chauhan",
    post: "UI DEVELOPER"
  },
  {
    id: 2,
    description: "Parimal is a self-motivated team member and a pleasure to work with. He demonstrates superior technical ability and produces work of exceptional quality. Parimal takes the time to fully understand the scope of projects and displays a keen attention to detail, but often at the expense of effective time management.",
    img: Image2 ,
    name: "Mehul Mistry",
    post: "FRONTEND DEVELOPER"
  },
  {
    id: 3,
    description: "Parimal can skillfully work together with other team partners and stakeholders. He is good at keeping the brand’s identity consistent throughout the design. He has a solid grasp of front-end development and is an excellent learner. He is at ease speaking in front of groups, which is unusual for a developer.",
    img:  Image3 ,
    name: "sunny",
    post: "BA"
  },
]

function Testimonial() {
  // useEffect(() => {
  //   const body = document.querySelector('#root');
  
  //   body.scrollIntoView({
  //       behavior: 'smooth'
  //   }, 500)
  
  // }, []);
 

  return (
    <>
    <Nav/>
      <AnimatedBg />
      <section className="home-testimonial">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center testimonial-pos">
            <div className="col-md-12 pt-4 d-flex justify-content-center testimonial-header">
              <h3>Testimonials</h3>
            </div>
            <div className="col-md-12 d-flex justify-content-center">
              <h2>Explore My senior experience</h2>
            </div>
          </div>
          <section className="home-testimonial-bottom">
            <div className="container testimonial-inner">
              <div className="row">
                {Data.map((detail, id) => {
                  return (
                    <div className="col-lg-4 style-3" key={id}>
                      <div className="tour-item">
                        <div className="tour-desc">
                          <div className="tour-text color-grey-3 text-center">&ldquo;{detail.description}&rdquo;</div>
                          <div className="d-flex justify-content-center pt-2 pb-2"><Image className="tm-people" src={detail.img} alt="image" /></div>
                          <div className="link-name d-flex justify-content-center">{detail.name}</div>
                          <div className="link-position d-flex justify-content-center">{detail.post}</div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

export default Testimonial