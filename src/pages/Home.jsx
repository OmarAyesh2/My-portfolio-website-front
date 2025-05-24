import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css'

function Home() {

  const navigator = useNavigate();

  return (
    <div className='page home-page'>
      <div className="available">
        <span className='point'></span>
        <span>Available for freelance work</span>
      </div>
      <h1>
        <span>Creative</span><br />
        <span>Digital Designer</span><br />
        <span>Based in Jordan</span>
      </h1>
      <p>
        Transforming ideas into exceptional digital experiences through creative design and innovative solutions. 
        Specializing in branding, web design, and motion graphics.
      </p>
      <div className="nav">
        <button onClick={() => {
          navigator('/work')
        }} className='portfolio'>
          View Portfolio
        </button>
        <button onClick={() => {
          navigator('/contact')
        }} className='contact'>
          Let's Talk
        </button>
      </div>
    </div>
  )
}

export default Home