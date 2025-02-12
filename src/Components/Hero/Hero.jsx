import React from 'react'
import './Hero.css'
import profile_img from '../../assets/ProfilePhoto.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Saloni Thete ,</span> fullstack developer.</h1>
        {/* <p>I am a fullstack developer</p> */}
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">
              {/* <p>You can view or download my resume here</p> */}
              <a href="/Saloni_Thete_1YOE.pdf" target='_blank' rel='noopener noreferrer'>Resume</a>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
