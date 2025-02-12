import React from 'react'
import './Footer.css'
// import footer_logo from '../../assets/footer_logo.svg'
import emailIcon from '../../assets/emailIcon.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import instagram from '../../assets/instagram.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                {/* <img src={footer_logo} alt="" /> */}
                <h1>Saloni</h1>
                <p>I am a fullstack developer  with expertise in Java, HTML, CSS, React and React Native. I enjoy building efficient, user-friendly applications by leveraging both front-end and back-end technologies.</p>
            </div>
            <div className="footer-top-right">

              <a href="https://github.com/SaloniThete">
                <img src={github} alt="GitHub" />
              </a>

              <a href="mailto:saloni662001@gmail.com@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={emailIcon} alt="Email" />
              </a>

              <a href="https://www.linkedin.com/in/salonithete/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn"/>
              </a>

              {/* <a href="https://instagram.com/pallavi_walve140" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram"/>
              </a> */}

                    {/* <img src={emailIcon} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={github} alt="" />
                    <img src={instagram} alt="" /> */}
            </div>
        </div>
        <div className="footer-bottom">
            <p className="footer-bottom-left">@ 2024 Pallavi Walve. All rights reserved. </p>
        </div>
      
    </div>
  )
}

export default Footer
