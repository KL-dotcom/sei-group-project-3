import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import RTimage from '../../styles/assets/roadtrippers.png'
import { isAuthenticated, logout } from '../../lib/auth'
import { stack as Menu } from 'react-burger-menu'

class Navbar extends React.Component {


  handleLogout = () => {
    logout()
    this.props.history.push('/')
  }


  render() {
    return (

      <Menu right >
        <div className="navbar-links">
          <div className="links">
            <Link to='/'><img className="nav-logo" alt="logo" src={RTimage} /></Link>
            {isAuthenticated() && <Link to='/trips/new' className="link">Add Trip</Link>}
            {isAuthenticated() && <Link to='/trips' className="link">Trips</Link>}
            {!isAuthenticated() && <Link to='/login' className="link">Login</Link>}
            {!isAuthenticated() && <Link to='/register' className="link">Register</Link>}
            {isAuthenticated() && <Link to='/profile' className="link">Profile</Link>}
            {isAuthenticated() && <span onClick={this.handleLogout} className="link">Logout</span>}
          </div>
        </div>
      </Menu>





    )
  }

}



export default withRouter(Navbar)