import React from 'react'
import { Link } from 'react-router-dom'


import RTimage from '../../styles/assets/roadtrippers.png'

const Home = () => {
  return (
    <div>
      <div className="header">
        <div className="header-left">
          <Link to='/'><img className="nav-logo" alt="logo" src={RTimage} height="50" /></Link>
        </div>
        <div className="header-right"></div>
      </div>      <div className="hero">
        <div className="hero-left">
          <div className="hero-left-title">Welcome to Roadtrippers</div>
          <div className="hero-left-subtitle">Home of the Wanderer</div>
          <Link to='/trips' className="hero-left-btn">Get started</Link>
        </div>
        <div className="hero-right"></div>
      </div>


    </div>
  )
}


export default Home