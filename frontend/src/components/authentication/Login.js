import React from 'react'
import { Link } from 'react-router-dom'

import RTimage from '../../styles/assets/roadtrippers.png'
import { loginUser } from '../../lib/api'
import { setToken } from '../../lib/auth'

class Login extends React.Component {
  state = {
    formData: {
      email: '',
      password: '',
    },
    error: ''
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData, error: '' })

  }

  handleSubmit = async event => {
    event.preventDefault()
    try {
      const res = await loginUser(this.state.formData)
      setToken(res.data.token)
      this.props.history.push('/trips')
    } catch (err) {
      this.setState({ error: 'Invalid Credentials' })
      console.log('the error state', this.state.error)
    }
  }

  render() {
    const { formData, error } = this.state
    return (
      <div>
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
            <img className="logo" src="https://i.ya-webdesign.com/images/alphabet-biker-png-2.png"
              alt=""
              height="100" />

            <div className="title">Log In</div>

            <form onSubmit={this.handleSubmit}>

              <div className="form" style={{ height: "300px" }}>
                <div className="error-msg">
                  {error && <small>{error}</small>}
                </div>

                <div className="form-item">
                  <label> Email </label>
                  <input type="email"
                    name="email"
                    onChange={this.handleChange}
                    value={formData.email}
                    className={error ? 'error' : ''}
                  />
                </div>
                <div className="form-item">
                  <label> Password </label>
                  <input type="password"
                    name="password"
                    onChange={this.handleChange}
                    value={formData.password}
                    className={error ? 'error' : ''}
                  />
                </div>

                <button type='submit' className="submit-btn">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login