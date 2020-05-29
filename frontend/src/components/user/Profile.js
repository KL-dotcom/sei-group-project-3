import React from 'react'
import Modal from 'react-modal'
import ReactTooltip from 'react-tooltip'
import { Link } from 'react-router-dom'
import RTimage from '../../styles/assets/roadtrippers.png'
import { icons } from "../../styles/assets/icon-data"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { getOwnProfile } from '../../lib/api'
import { isAuthenticated } from '../../lib/auth'
class Profile extends React.Component {
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
    currentProfPic: null,
    currentCoverPic: null,
    userTrips: []
  }
  async componentDidMount() {
    try {
      const res = await getOwnProfile()
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
  handleOpenModal = () => {
    this.setState({ showModal: true })
  }
  handleCloseModal = () => {
    this.setState({ showModal: false })
  }
  // handleSelectProfilePhoto = (event) => {
  //   const pic = event.target.value
  //   this.setState({ ...this.state, currentProfPic: pic })
  // }
  handleSelectPhoto = (event) => {
    const pic = event.target.value
    const target = event.target.id
    this.setState({ ...this.state, [target]: pic })
  }
  render() {
    const { username, name, garage, dreamTrips, profilePhoto, recentTrips, homeBase, tripPrefs } = this.state.user
    const { currentProfPic, currentCoverPic } = this.state
    const filteredIcons = icons.filter(icon => tripPrefs.includes(icon.name))
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
    const choosePicStyle = {
      color: "whitesmoke",
      background: "rgba(128, 128, 128, 0.5)",
      border: "black",
      borderRadius: "5px",
      marginBottom: "3px"
    }
    return (
      <section>
        <div className="header">
          <div className="header-left">
            <Link to='/'><img className="nav-logo" alt="logo" src={RTimage} height="50" /></Link>
          </div>
          <div className="header-right">
            {isAuthenticated() && <Link to='/profile/edit'><button className="edit-your-profile" type="button">Edit Profile</button></Link>}
          </div>
        </div>



        <div style={{ display: "flex", justifyContent: "center" }}>
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
              {profilePhoto.map(photo =>
                <div id={photo} key={photo} className="carousel-item">
                  {isAuthenticated() && <button style={choosePicStyle} className="choose-pic" onClick={this.handleSelectPhoto} id="currentProfPic" value={photo}>make profile pic</button>}
                  <img src={photo} alt="" className="carousel-image" />
                </div>)}
            </Carousel>
          </Modal>
        </div>
        <div className="cover">
          <div className="cover-left">
            <div className="cover-left-image">
              <div onClick={this.handleOpenModal} style={{ height: "200px", width: "300px" }}>
                <img className="display-image" src={currentProfPic ? currentProfPic : profilePhoto[0]}
                  alt=""
                  height="200px" />
              </div>
            </div>
            <div className="cover-left-title">{username}</div>
            <div className="cover-left-subtitle">{name}</div>
          </div>
          <div className="cover-right">
            <img src={currentCoverPic ? currentCoverPic : recentTrips[0]}
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
              {/* {[homeBase, garage, dreamTrips].map(i =><> <span style={{ color: "#fa6400" }}key={i}>{i}</span><hr></hr><br></br></>)} */}
              Home base <span style={{ color: "#fa6400" }}>{homeBase}</span> <hr></hr><br></br>
            In the garage <span style={{ color: "#fa6400" }}>{garage}</span> <hr></hr><br></br>
            Ultimate Trip <span style={{ color: "#fa6400" }}>{dreamTrips}</span><hr></hr><br></br>
              <h4>PREFERENCES</h4>
              {filteredIcons.map(icon => <ReactTooltip key={icon.name} id={icon.name} place="top" effect="solid">{icon.name}</ReactTooltip>)}
              {filteredIcons.map(icon => <label key={icon.name} data-tip data-for={icon.name}>{icon.value}</label>)}
            </div>
            {/* view your own messages */}
            <div className="profile-messages">
              <p>Your current conversations:</p>
              <hr />
              <div className="profile-messages-main">
                {this.state.user.messages?.map(message => (
                  <div key={message._id}>
                    <Link to={`/messages/${message._id}`} className="link">
                      {message.sender._id === this.state.user._id
                        ? 'You '
                        : `${message.sender.username} `
                      }
             &
            {message.recipient._id === this.state.user._id
                        ? ' You'
                        : ` ${message.recipient.username}`
                      }
                      {/* {message.sender?.username} & {message.recipient?.username} */}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="profile-buttons">
            </div> */}
          </div>
          <div className="caro-div">
            <Carousel
              infiniteLoop
              centerMode
              dynamicHeight={true}>
              {recentTrips.map(trip =>
                <div key={trip} className="carousel-item">
                  {isAuthenticated() && <button style={choosePicStyle} onClick={this.handleSelectPhoto} id="currentCoverPic" value={trip}>make cover pic</button>}
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
export default Profile