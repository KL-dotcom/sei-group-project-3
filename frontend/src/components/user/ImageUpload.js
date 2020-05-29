import React from 'react'
import axios from 'axios'



const uploadUrl = process.env.REACT_APP_SECRET_API


const uploadPreset = process.env.REACT_APP_SECRET_PRESET

class ImageUpload extends React.Component {
  state = {
    image: null
  }

  handleUpload = async event => {
    const data = new FormData()
    data.append('file', event.target.files[0])
    data.append('upload_preset', uploadPreset)
    const res = await axios.post(uploadUrl, data)
    this.setState({
      image: res.data.url
    }, () => {
      this.props.onChange({ target: { name: this.props.name, value: this.state.image } })
    })
  }

  render() {
    const { image } = this.state
    return (
      <>
        {image ?
          <div>
            <img src={image} alt="selected" />
          </div>
          :
          <>

            <input
              type="file"
              onChange={this.handleUpload}
            />
          </>}
      </>
    )
  }

}

export default ImageUpload