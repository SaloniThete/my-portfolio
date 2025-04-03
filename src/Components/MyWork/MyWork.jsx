import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import project_img_1 from '../../assets/recipe.jpg'
import project_img_2 from '../../assets/music.jpg'
import etp from '../../assets/etpmobile.png'
import weather from '../../assets/weather.jpg'

const MyWork = () => {
    return (
      <div id='work' className='mywork'>
        <div className="mywork-title">
          <h1>My Latest Work</h1>
          <img src={theme_pattern} alt="" />
        </div>
  
        <div className="mywork-container">

    

          <div className="mywork-card">
            <img src={project_img_2} alt="Music Player" />
            <div className="mywork-info">
              <h2>Music Player</h2>
              <a href="https://music-player-rho-kohl.vercel.app/" target='_blank' rel='noopener noreferrer' className="mywork-demo">View Demo</a>
            </div>
          </div>

          
          
          {/* <div className="mywork-card">
            <img src={project_img_1} alt="Recipe App" />
            <div className="mywork-info">
              <h2>Recipe App</h2>
              <a href="" target='_blank' rel='noopener noreferrer' className="mywork-demo">View Demo</a>
            </div>
          </div> */}
          <div className="mywork-card">
            <img src={weather} alt="Weather App" />
            <div className="mywork-info">
              <h2>Weather App</h2>
              <a href="https://weather-app-five-swart.vercel.app/" target='_blank' rel='noopener noreferrer' className="mywork-demo">View Demo</a>
            </div>
          </div>
          <div className="mywork-card">
            <img src={etp} alt="ETP Mobile store" />
            <div className="mywork-info">
              <h2>ETP Mobile store</h2>
              <a href="https://play.google.com/store/apps/details?id=com.etp.base&hl=en_IN&pli=1" target='_blank' rel='noopener noreferrer' className="mywork-demo">View Demo</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default MyWork;

