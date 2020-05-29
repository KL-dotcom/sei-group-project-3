import React from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
import { isAuthenticated, withHeaders, isOwner } from '../../lib/auth'

import RTimage from '../../styles/assets/roadtrippers.png'
import TripFormExt from './TripFormExt'
import { getSingleTrip, editTrip } from '../../lib/api'
import { icons } from "../../styles/assets/icon-data"


class TripEdit extends React.Component {
  state = {
    formData: {
      name: '',
      image: '',
      tags: [''],
      description: '',
      startingPointCity: '',
      startingPointState: '',
      startingPointCountry: '',
      endPointCity: '',
      endPointState: '',
      endPointCountry: '',
      scenery: '',
      enjoyment: '',
      distance: '',
      timeOfYear: '',
      highlights: ''
    },
    errors: {},
    tempTrip: {
      startingPointCity: '',
      startingPointState: '',
      startingPointCountry: '',
      endPointCity: '',
      endPointState: '',
      endPointCountry: '',
    }
  }

  async componentDidMount() {
    const tripId = this.props.match.params.id
    try {
      const res = await axios.get(`/api/trips/${tripId}`, withHeaders())
      const tempTrip = { ...this.state.tempTrip, ...res.data }
      this.setState({ formData: res.data, tempTrip })
      console.log(this.state.tempTrip)
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = e => {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value }
    const errors = { ...this.state.errors, [e.target.name]: '' }
    this.setState({ formData, errors })
  }

  handleSubmit = async event => {
    event.preventDefault()
    const tripId = this.props.match.params.id
    try {
      await editTrip(tripId, this.state.formData)
      this.props.history.push(`/trips/${tripId}`)
    } catch (err) {
      console.log(err.response)
    }
  }

  handleMapChange = e => {
    const tempTrip = { ...this.state.tempTrip, [e.target.name]: e.target.value }
    this.setState({ tempTrip })
  }

  handleTripSearch = () => {
    const finalTrip = { ...this.state.tempTrip }
    const formData = { ...this.state.formData, ...finalTrip }
    // console.log(state)
    this.setState({ formData })
  }


  addToTags = (event) => {
    const icon = event.target.id
    const tripPrefsEdit = this.state.formData.tags
    const index = tripPrefsEdit.indexOf(icon)
    if (tripPrefsEdit.includes(icon)) {
      tripPrefsEdit.splice(index, 1)
      const color = ""
      const formData = { ...this.state.formData, tags: tripPrefsEdit }
      this.changeCSS(icon, color)
      this.setState({ formData })
      console.log(this.state.formData.tags)
    } else {
      tripPrefsEdit.push(icon)
      const color = "white"
      const formData = { ...this.state.formData, tags: tripPrefsEdit }
      this.changeCSS(icon, color)
      this.setState({ formData })
      console.log(this.state.formData.tags)
    }
  }

  changeCSS = (icon, color) => {
    document.getElementById(icon).setAttribute("style", `color: ${color}`)
  }

  preloadCSS = (filteredIcons) => {
    filteredIcons.forEach(icon =>
      document.getElementById(icon.name).setAttribute("style", "color: white"))
  }


  render() {
    const filteredIcons = icons.filter(icon => this.state.formData.tags.includes(icon.name))
    this.preloadCSS(filteredIcons)


    return (
      <section>
        <div className="header">
          <div className="header-left">
            <Link to='/'><img className="nav-logo" alt="logo" src={RTimage} height="50" /></Link>
          </div>
          <div className="header-right">
            {<button onClick={this.props.history.goBack} className="back-button" type="button">Back</button>}
          </div>
        </div>
        <TripFormExt
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleMapChange={this.handleMapChange}
          handleMapSearch={this.handleMapSearch}
          handleTripSearch={this.handleTripSearch}
          addToTags={this.addToTags}
          icons={icons}
          visibility="hidden"
          formData={this.state.formData}
          tempTrip={this.state.tempTrip}
          errors={this.state.errors}
          titleText="Edit my Trip"
          buttonText="Edit my Trip"
        />
      </section>
    )
  }

}

export default TripEdit