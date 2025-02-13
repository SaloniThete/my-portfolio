import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Experience_Data from '../../assets/services_data'
// import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div id='experience' className='experience'>
        <div className="experience-title">
            <h1>Experience</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="experience-container">
            {Experience_Data.map((experience,index)=>{
                return <div key={index} className="experience-format">
                    <h3>{experience.role}</h3>
                    <h2>{experience.company}</h2>
                    <p>{experience.date}</p>
                    <div className="experience-readmore">
                        {/* <p>Read More</p>
                        <img src={arrow_icon} alt="" /> */}
                    </div>
                </div>
            })}
        </div>
      
    </div>
  )
}

export default Services
