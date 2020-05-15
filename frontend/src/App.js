import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Components/common/Home'
import Register from './Components/authentication/Register'
import Login from './Components/authentication/Login'
import TripsIndex from './Components/trips/tripsIndex'
import TripShow from './Components/trips/tripShow'
import Navbar from './Components/common/Navbar'

import Footer from './Components/common/Footer'
import Profile from './Components/user/Profile'


const App = () => {
  return (
    <div className="background">

    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/trips/:id" component={TripShow} />
        <Route path="/trips" component={TripsIndex} />
        <Route path="/users/:userId" component={Profile} />
      </Switch>
      <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
