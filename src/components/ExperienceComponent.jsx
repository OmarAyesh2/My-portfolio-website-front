import React from 'react'

function ExperienceComponent({name, val}) {
  return (
    <div className='experience-component'>
        <div>
            <span>{name}</span>
            <span>{val}%</span>
        </div>
        <div className='experience-bar'>
            <div className='experience-bar-fill' style={{width: `${val}%`}}></div>
        </div>
    </div>
  )
}

export default ExperienceComponent;