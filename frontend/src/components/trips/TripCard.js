import React from 'react'
import { Link } from 'react-router-dom'


class TripCard extends React.Component {
  state = {
    hover: false
  }

  handleHover = async () => {
    this.setState({ hover: true })
  }

  handleUnhover = async () => {
    this.setState({ hover: false })
  }

  render() {
    const { _id, name, image } = this.props
    const { hover } = this.state

    return (
      <div className="index-comps">
        <Link to={`/trips/${_id}`}>
          <div className="index-card">
            <div className="crop">
              <img className="index-image"
                src={image}

                alt={name}
                style={{ size: "cover" }}
                height="350"
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleUnhover}
              />
            </div>


            <p
              style={{ visibility: hover ? "visible" : "hidden" }}
              className="blurb"
              onMouseEnter={this.handleHover}
              onMouseLeave={this.handleUnhover}
            >
              {name}
            </p>


          </div>
        </Link>
      </div>
    )
  }
}

export default TripCard
