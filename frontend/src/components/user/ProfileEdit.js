import React from 'react'
import ImageUpload from './ImageUpload'
import { icons } from "../../styles/assets/icon-data"
import { Link } from 'react-router-dom'
import RTimage from '../../styles/assets/roadtrippers.png'
import { editProfile, getOwnProfile } from '../../lib/api'
import ProfileDetails from './ProfileDetails'

class ProfileEdit extends React.Component {
  state = {
    userData: {
      name: null,
      username: null,
      email: null,
      homeBase: null,
      garage: null,
      dreamTrips: null,
      recentTrips: [''],
      profilePhoto: [''],
      tripPrefs: ['']
    }
  }
  async componentDidMount() {
    try {
      const res = await getOwnProfile()
      this.setState({ userData: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = event => {
    console.log(event.target)
    const userData = { ...this.state.userData, [event.target.name]: event.target.value }
    this.setState({ userData })
  }

  handleSubmit = async event => {
    event.preventDefault()
    try {
      await editProfile(this.state.userData)
      this.props.history.push('/profile')
    } catch (err) {
      console.log(err.response)
    }
  }

  handleAddImage = (event) => {
    if (event.target.name === 'profilePhoto') {
      const userData = { ...this.state.userData, profilePhoto: [...this.state.userData.profilePhoto] }
      userData.profilePhoto[userData.profilePhoto.length - 1] = event.target.value

      this.setState({ userData })
    } else {
      const userData = { ...this.state.userData, recentTrips: [...this.state.userData.recentTrips] }
      userData.recentTrips[userData.recentTrips.length - 1] = event.target.value
      this.setState({ userData })
    }
  }

  handleAddExtraImage = (e) => {
    if (e.target.name === 'profilePhoto') {
      const userData = { ...this.state.userData, profilePhoto: [...this.state.userData.profilePhoto, ''] }
      this.setState({ userData })
    } else {
      const userData = { ...this.state.userData, recentTrips: [...this.state.userData.recentTrips, ''] }
      this.setState({ userData })
    }
  }

  handleRemoveImage = (e) => {
    if (e.target.name === 'profilePhoto') {
      const photos = this.state.userData.profilePhoto.filter(photo => photo !== e.target.value)
      const userData = { ...this.state.userData, profilePhoto: photos }
      this.setState({ userData })
    } else if (e.target.name === 'recentTrips') {
      const photos = this.state.userData.recentTrips.filter(photo => photo !== e.target.value)
      const userData = { ...this.state.userData, recentTrips: photos }
      this.setState({ userData })
    }
  }

  addToPref = (event) => {
    const icon = event.target.id
    const tripPrefsEdit = this.state.userData.tripPrefs
    const index = tripPrefsEdit.indexOf(icon)
    if (tripPrefsEdit.includes(icon)) {
      tripPrefsEdit.splice(index, 1)
      const color = ""
      const userData = { ...this.state.userData, tripPrefs: tripPrefsEdit }
      this.changeCSS(icon, color)
      this.setState({ userData })
    } else {
      tripPrefsEdit.push(icon)
      const color = "white"
      const userData = { ...this.state.userData, tripPrefs: tripPrefsEdit }
      this.changeCSS(icon, color)
      this.setState({ userData })
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
    const { username, name, garage, dreamTrips, homeBase, email, tripPrefs } = this.state.userData
    const filteredIcons = icons.filter(icon => tripPrefs.includes(icon.name))
    this.preloadCSS(filteredIcons)

    return (
      <section>
        <div className="header">
          <div className="header-left">
            <Link to='/'><img className="nav-logo" alt="logo" src={RTimage} height="50" /></Link>
          </div>
          <h2 className="edit-title"> Edit your profile</h2>
          <div className="header-right"></div>

        </div>
        <section className="edit-profile-page">
          <form onSubmit={this.handleSubmit}>

            <div className="top-section">
              <div className="edit-profile-photos">
                <h3 className="edit-title">Your Profile Photos {this.state.userData.profilePhoto.length < 7 &&
                  <button
                    className="add-photo"
                    name="profilePhoto"
                    type="button"
                    onClick={this.handleAddExtraImage}>Add Another Profile Picture</button>}</h3>

                <div className="photos-box">
                  <div className="edit-photos">
                    {this.state.userData.profilePhoto.map(photo =>
                      photo ?
                        (
                          <div key={photo} style={{
                            width: "150px", height: "84px", borderRadius: "15px", margin: "5px",
                            backgroundImage: `url(${photo})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"
                          }}>
                            <button onClick={this.handleRemoveImage}
                              name="profilePhoto"
                              value={photo}
                              type="button"
                              className="delete-photo">X</button>
                          </div>

                        )
                        :
                        (<ImageUpload
                          key={photo}
                          onChange={this.handleAddImage}
                          name="profilePhoto"
                        />)
                    )}

                  </div>
                </div>

                <div className="photos-box"></div>
                <h3 className="edit-title">Your Recent Photos {this.state.userData.recentTrips.length < 7 &&
                  <button
                    className="add-photo"
                    type="button"
                    name="recentTrips"
                    onClick={this.handleAddExtraImage}>Add another Recent Photo</button>}</h3>

                <div className="edit-photos">
                  {this.state.userData.recentTrips.map(photo =>
                    photo ?
                      (
                        <div key={photo} style={{
                          width: "150px", height: "84px", margin: "5px", borderRadius: "15px",
                          backgroundImage: `url(${photo})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"
                        }}>
                          <button onClick={this.handleRemoveImage}
                            name="profilePhoto"
                            value={photo}
                            type="button"
                            className="delete-photo">X</button>
                        </div>

                      )
                      :
                      (<ImageUpload
                        key={photo}
                        onChange={this.handleAddImage}
                        name="recentTrips"
                      />)
                  )}
                </div>
              </div>
            </div>

            <hr className="line-break"></hr>
            <h3 className="edit-title">Your Riding Style</h3>
            <div className="bottom-section">
              <div className="edit-profile-icons">
                {icons.map(icon => <p className="icons" id={icon.name} onClick={this.addToPref} key={icon.name}>{icon.value}{icon.name} </p>)}
              </div>
            </div>

            <hr className="line-break"></hr>
            <div className="edit-profile-details">
              <ProfileDetails
                title="Name"
                name="name"
                handleChange={this.handleChange}
                value={name ? name : ""}
              />
              <ProfileDetails
                title="Username"
                name="username"
                handleChange={this.handleChange}
                value={username ? username : ""}
              />
              <ProfileDetails
                title="Email"
                name="email"
                handleChange={this.handleChange}
                value={email ? email : ""}
              />
              <ProfileDetails
                title="Home Base"
                name="homeBase"
                handleChange={this.handleChange}
                value={homeBase ? homeBase : ""}
              />
              <ProfileDetails
                title="Garage"
                name="garage"
                handleChange={this.handleChange}
                value={garage ? garage : ""}
              />
              <ProfileDetails
                title="Dream Trips"
                name="dreamTrips"
                handleChange={this.handleChange}
                value={dreamTrips ? dreamTrips : ""}
              />
            </div>
            <button className="finish-edit" type="submit">Finish Editting</button>
          </form>
        </section>
      </section>
    )
  }
}
export default ProfileEdit