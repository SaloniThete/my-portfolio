import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/ProfilePhoto.jpeg'


const About = () => {
  
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        {/* <div className="about-left">
           <img src={profile_img} alt="" /> 
        </div> */}
        <div className="about-right">
            <div className="about-para">
                <p>I am a dedicated developer with a strong focus on frontend architecture and mobile app solutions. Beyond core development, I am Salesforce Certified, allowing me to bridge the gap between custom user interfaces and powerful CRM ecosystems.</p>
                <p>My experience spans contributing to open-source projects via Git and GitHub, where I’ve honed my ability to collaborate in high-velocity teams. Driven by a creative background in music and travel, I bring a unique perspective to problem-solving and a meticulous eye for detail. </p>
                <p>In addition to my technical skills, I have a creative side, with a love for music and travel, which fuels my attention to detail and problem-solving abilities. I thrive in dynamic environments and am constantly seeking to leverage new technologies to build seamless, user-centric experiences.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"80%"}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>Node js</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>Java</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>React Native</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>SQL</p><hr style={{width:"50%"}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>2+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>3+</h1>
            <p>PROJECT COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>2+</h1>
            <p>TECHNICAL CERTIFICATES</p>
        </div>

      </div>
    </div>
  )
}

export default About
