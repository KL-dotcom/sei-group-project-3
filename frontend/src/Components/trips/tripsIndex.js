import React from 'react'
import { Link } from 'react-router-dom'


import RTimage from '../../styles/assets/roadtrippers.png'
import TripCard from './TripCard'
import { getAllTrips } from '../../lib/api'
import Select from 'react-select'

class tripsIndex extends React.Component {
  state = {
    trips: [],
    hover: false,
    searchVal: '',
    selectVal: []
  }

  options = [
    { value: 'abroad', label: 'Abroad' },
    { value: 'vineyard', label: 'Vineyard' },
    { value: 'architecture', label: 'Architecture' },
    { value: 'art and culture', label: 'Arts and Culture' },
    { value: 'camping', label: 'Camping' },
    { value: 'canyon', label: "Canyons" },
    { value: 'car', label: 'Cars' },
    { value: 'cities', label: 'Cities' },
    { value: 'desert', label: 'Deserts' },
    { value: 'fast', label: 'Fast' },
    { value: 'forest', label: 'Forests' },
    { value: 'friends', label: 'Friends' },
    { value: 'gastronomy', label: 'Gastronomy' },
    { value: 'history', label: 'History' },
    { value: 'hostel', label: 'Hostels' },
    { value: 'hotel', label: 'Hotels' },
    { value: 'mechanics', label: 'Mechanics' },
    { value: 'motorbike', label: 'Motorbike' },
    { value: 'mountains', label: 'Mountains' },
    { value: 'nature', label: 'Nature' },
    { value: 'off road', label: 'Off-Road', },
    { value: 'panoramic view', label: 'Panoramic Views' },
    { value: 'riverside', label: 'Riversides' },
    { value: 'rural', label: 'Rural' },
    { value: 'sea', label: 'Sea' },
    { value: 'solo', label: 'Solo' },
    { value: 'sports', label: 'Sports' },
    { value: 'straight', label: 'Straight' }
  ]

  async componentDidMount() {
    try {
      const res = await getAllTrips()
      this.setState({ trips: res.data })
    } catch (err) {
      console.log(err)
    }
  }




  filterTrips = () => {
    const { searchVal, selectVal } = this.state
    console.log('filter', selectVal, searchVal)
    const regexp = new RegExp(searchVal, 'i')
    return this.state.trips.filter(trip => (
      (regexp.test(trip.startingPointCity) || regexp.test(trip.endPointCity)) && (selectVal?.every(tag => { return trip.tags.includes(tag.value) }) ?? true)
    ))
  }

  handleSearch = e => {
    const searchVal = e.target.value
    this.setState({ searchVal })

  }

  handleMultiChange = selected => {

    this.setState({ selectVal: selected })

  }

  render() {

    return (
      <main>
        <div className="header">
          <div className="header-left">
            <Link to='/'><img className="nav-logo" alt="logo" src={RTimage} /></Link>
          </div>
          <div className="header-right">
            {<button onClick={this.props.history.goBack} className="back-button" type="button">Back</button>}
          </div>
        </div>

        <div className="index">
          <div className="index-container">
            <div className="title"> WELCOME TO THE ROAD TRIPS </div>
            <div className="search-container">
              <div className="search-bar">
                <label>Search Locations</label>
                <input className="input" type="text" onChange={this.handleSearch} placeholder="Search..." />
              </div>
              <div className="search-bar">
                <label>Search Tags</label>
                <Select
                  isMulti
                  options={this.options}
                  searchable={true}
                  onChange={this.handleMultiChange}
                  className="input"
                />
              </div>
            </div>

            <div className="all-index-divs">
              {this.filterTrips().map(trip =>
                <TripCard key={trip._id} className="all-index-div"
                  {...trip}

                />)}
            </div>
          </div>
        </div>
      </main>

    )
  }
}


export default tripsIndex