import React from 'react'
import axios from 'axios'
import Modal from 'react-modal'
import ReactTooltip from "react-tooltip"
import { Link } from 'react-router-dom'
import RTimage from '../../styles/assets/roadtrippers.png'
import { icons } from "../../styles/assets/icon-data"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { isAuthenticated, withHeaders } from '../../lib/auth'




class PublicProfile extends React.Component {
  state = {
    showModal: false,
    user: {
      name: null,
      username: null,
      email: null,
      homeBase: null,
      garage: null,
      dreamTrips: null,
      recentTrips: [''],
      profilePhoto: [''],
      tripPrefs: ['']
    },
    userTrips: [],
    pending: ''
  }

  async componentDidMount() {
    try {

      const userId = this.props.match.params.id
      console.log(userId)
      const res = await axios.get(`/api/users/${userId}`)
      console.log("profile state after upload", res)
      this.setState({ user: res.data })
    } catch (err) {
      console.log(err)
    }
  }
  // async getRoutes() {
  //   const res = await axios.get('/api/trips')
  //   const userTrips = res.filter(object => (
  //     object._id === this.props.match.params.userId
  //   ))
  //   console.log(userTrips)
  //   this.setState({ userTrips })
  // }

  handleChange = e => {
    const text = e.target.value
    console.log(text)
    this.setState({ pending: text })
  }
  handleSubmit = async e => {
    const userId = this.props.match.params.id
    try {
      e.preventDefault()
      e.target.reset()
      const res = await axios.get(`/api/users/${userId}/conversation`, withHeaders())
      this.setState((state, props) => {
        console.log(res.data)
        state.user.messages = { ...state.user.messages, ...res.data }
        console.log(state.user)
        return state
      })
      this.props.history.push(`/messages/${res.data._id}`)
    } catch (err) {
      console.log(err)
    }
  }


  handleOpenModal = () => {
    this.setState({ showModal: true })
  }

  handleCloseModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    // console.log(icons[0].name)
    const { username, name, garage, dreamTrips, profilePhoto, recentTrips, homeBase, tripPrefs } = this.state.user

    const filteredIcons = icons.filter(icon => tripPrefs.includes(icon.name))
    // console.log(filteredIcons)
    const modalStyle = {
      content: {
        // position: "fixed",
        left: "20%",
        border: "1px solid rgb(204, 204, 204)",
        background: "rgba(15, 15, 15, 0.8)",
        overflow: "auto",
        borderRadius: "20px",
        padding: "20px",
        width: "60%",
      }
    }
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
        <div>
          <Modal
            isOpen={this.state.showModal}
            contentLabel="onRequestClose Example"
            onRequestClose={this.handleCloseModal}
            ariaHideApp={false}
            style={modalStyle}
          >
            <Carousel
              infiniteLoop
              centerMode
              dynamicHeight={true}
            >

              {profilePhoto.map(photo => <div key={photo} className="carousel-item">
                <img src={photo} alt="" className="carousel-image" />
              </div>)}
            </Carousel>
          </Modal>
        </div>

        <div className="cover">
          <div className="cover-left">
            <div className="cover-left-image">
              <div onClick={this.handleOpenModal} style={{ height: "200px", width: "300px" }}>
                <img className="display-image" src={profilePhoto[0]}
                  alt=""
                  height="200px" />
              </div>
            </div>
            <div className="cover-left-title">{username}</div>
            <div className="cover-left-subtitle">{name}</div>
          </div>
          <div className="cover-right">
            <img src={recentTrips[0]}
              className="image"
              alt=""
              height="700" />
          </div>
        </div>
        <div className="recent-trips-title">
          Recent Photos
            </div>
        <div className="recent-trips">
          <div className="bio-div">
            <div className="bio">
              Home base <span style={{ color: "#fa6400" }}>{homeBase}</span> <hr></hr><br></br>
            In the garage <span style={{ color: "#fa6400" }}>{garage}</span> <hr></hr><br></br>
            Ultimate Trip <span style={{ color: "#fa6400" }}>{dreamTrips}</span><hr></hr><br></br>
              <h4>PREFERENCES</h4>


              {filteredIcons.map(icon => <ReactTooltip key={icon.name} id={icon.name} place="top" effect="solid">{icon.name}</ReactTooltip>)}

              {filteredIcons.map(icon => <label key={icon.name} data-tip data-for={icon.name}>{icon.value}</label>)}


            </div>
            <div className="profile-message">
              {isAuthenticated() ?
                <form onSubmit={this.handleSubmit}>
                  <div className="add-message">

                    <button className="message-btn">Start a Conversation</button>
                  </div>
                </form>
                : <p className="message-holder">Please login to start a conversation</p>}


            </div>
          </div>
          <div className="caro-div">
            <Carousel
              infiniteLoop
              centerMode
              dynamicHeight={true}>

              {recentTrips.map(trip =>
                <div key={trip} className="carousel-item">
                  <img src={trip}
                    alt=""
                    className="carousel-image" />
                  {/* <p className="legend"></p> */}
                </div>)}
            </Carousel>
          </div>
        </div>
      </section>
    )
  }
}
export default PublicProfile
