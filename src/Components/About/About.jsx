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
                <p>A passionate developer with a strong focus on frontend development and mobile app solutions. I have contributed to open-source projects using version control systems like Git and GitHub, which has helped me collaborate effectively and grow as a developer.</p>
                <p>In addition to my technical skills, I have a creative side, with a love for music and travel, which fuels my attention to detail and problem-solving abilities. I thrive in dynamic environments and am always eager to learn new technologies and enhance my development capabilities.</p>
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
            <h1>1+</h1>
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
