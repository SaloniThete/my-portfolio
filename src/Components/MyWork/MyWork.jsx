import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import project_img_1 from '../../assets/project_1.png'
import project_img_2 from '../../assets/project_2.png'
import project_img_3 from '../../assets/project_3.png'
import project_img_4 from '../../assets/project_4.png'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My latest work</h1>
            <img src={theme_pattern} alt="" />
        </div>

        <div className="mywork-container">
            <img src={project_img_1} alt=""/>  
            <img src={project_img_2} alt=""/>  
        </div>

        <div className="mywork-action">
            <div className="mywork-demo">
                <a href="https://digitalclockwithdate.netlify.app/" target='_blank' rel='noopener noreferrer'>Demo</a></div>
            {/* <div className="mywork-source-code">
            <a href="https://lnkd.in/gJ7NgN7u" target='_blank' rel='noopener noreferrer'>Source Code</a>
            </div> */}
        </div>

        <div className="mywork-action-1">
            <div className="mywork-demo">
                <a href="https://lnkd.in/gNGGKkYF" target='_blank' rel='noopener noreferrer'>Demo</a></div>
            {/* <div className="mywork-source-code">
            <a href="https://github.com/PallaviWalve/Celsius-to-Fahrenheit-Converter.git" target='_blank' rel='noopener noreferrer'>Source Code</a>
            </div> */}
        </div>

        <div className="mywork-container">
            <img src={project_img_3} alt=""/>  
            <img src={project_img_4} alt=""/>  
        </div>

        <div className="mywork-action">
            <div className="mywork-demo">
                <a href="https://whimsical-duckanoo-9b827c.netlify.app" target='_blank' rel='noopener noreferrer'>Demo</a></div>
            {/* <div className="mywork-source-code">
            <a href="https://github.com/PallaviWalve/Movie-Project.git" target='_blank' rel='noopener noreferrer'>Source Code</a>
            </div> */}
        </div>

        <div className="mywork-action-1">
            <div className="mywork-demo">
                <a href="https://whimsical-meringue-1a9098.netlify.app/" target='_blank' rel='noopener noreferrer'>Demo</a></div>
            {/* <div className="mywork-source-code">
            <a href="https://github.com/PallaviWalve/WeatherApp.git" target='_blank' rel='noopener noreferrer'>Source Code</a>
            </div> */}
        </div>
    </div>
  )
}

export default MyWork
