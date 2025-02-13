import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import project_img_1 from '../../assets/recipe.jpg'
import project_img_2 from '../../assets/music.jpg'
import project_img_3 from '../../assets/project_3.png'
import project_img_4 from '../../assets/project_4.png'

const MyWork = () => {
    return (
      <div id='work' className='mywork'>
        <div className="mywork-title">
          <h1>My Latest Work</h1>
          <img src={theme_pattern} alt="" />
        </div>
  
        <div className="mywork-container">
          <div className="mywork-card">
            <img src={project_img_1} alt="Recipe App" />
            <div className="mywork-info">
              <h2>Recipe App</h2>
              <a href="" target='_blank' rel='noopener noreferrer' className="mywork-demo">View Demo</a>
            </div>
          </div>
  
          <div className="mywork-card">
            <img src={project_img_2} alt="Music Player" />
            <div className="mywork-info">
              <h2>Music Player</h2>
              <a href="" target='_blank' rel='noopener noreferrer' className="mywork-demo">View Demo</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default MyWork;

