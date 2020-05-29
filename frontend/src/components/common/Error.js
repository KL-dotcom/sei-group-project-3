import React from 'react'
import { Link } from 'react-router-dom'

import RTimage from '../../styles/assets/roadtrippers.png'

const Error = () => (

  <div className="section">
    <div className="header">
      <div className="header-left">
        <Link to='/'><img className="nav-logo" alt="logo" src={RTimage} height="50" /></Link>
      </div>
      <div className="header-right">
        {<button onClick={this.props.history.goBack} className="back-button" type="button">Back</button>}
      </div>
    </div>
    <div className="container">
      <p className="title">Oops something went wrong, try again</p>
    </div>
  </div>
)
export default Error