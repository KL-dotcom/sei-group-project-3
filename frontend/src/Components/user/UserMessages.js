import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { getOwnProfile } from '../../lib/api'
import { withHeaders } from '../../lib/auth'
import RTimage from '../../styles/assets/roadtrippers.png'


class UserMessages extends React.Component {
  state = {
    user: null,
    pending: ''
  }
  async componentDidMount() {
    try {
      const res = await getOwnProfile()
      this.setState({ user: res.data })
      console.log(this.state.user._id)
    } catch (err) {
      console.log(err)
    }
  }

  filterMessages = () => {
    const messageId = this.props.match.params.id
    const res = this.state.user.messages.filter(message => (
      message._id === messageId
    ))
    console.log(res)
    return res[0]
  }

  handleSubmit = async e => {
    const messageId = this.props.match.params.id
    const userId = this.state.user._id
    try {
      e.preventDefault()
      e.target.reset()
      const res = await axios.post(`/api/users/${userId}/${messageId}`, { text: this.state.pending }, withHeaders())
      console.log(res.data)
      this.setState((state, props) => {
        console.log(state.user.messages)
        state.user.messages.find(({ _id }) => {
          return _id === res.data._id
        }).comment = res.data.comment
        console.log(state)
        return state
      })
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = e => {
    const text = e.target.value
    console.log(text)
    this.setState({ pending: text })
  }

  render() {
    const { user } = this.state
    if (!user) return <p>Loading</p>

    return (
      <div>
        <div className="header">
          <div className="header-left">
            <Link to='/'><img className="nav-logo" alt="logo" src={RTimage} height="50" /></Link>
          </div>
          <div className="header-right"></div>
        </div>
        <section className="message">
          <h3>Conversation between

      {this.filterMessages()?.sender._id === this.state.user._id
              ? ' you '
              : ` ${this.filterMessages().sender.username} `

            }
        &
        {this.filterMessages().recipient._id === this.state.user._id
              ? ' You'
              : ` ${this.filterMessages().recipient.username}`

            } </h3>

          <div className="message-body">
            {/* <p className={
        this.filterMessages().sender._id === this.state.user._id 
        ? 'you' 
        : 'them'
      }>{this.filterMessages()?.text}</p> */}
            <div className="messages">

              {this.filterMessages().comment?.map(comment => (
                <div key={comment._id} className={comment.user === this.state.user._id ? 'you' : 'them'}>

                  <p key={comment._id}>{comment.text}</p>

                </div>

              ))}
            </div>




            <div className="send-message">
              <form onSubmit={this.handleSubmit} className="submit-message">
                <textarea
                  placeholder="Write a message..."
                  className="comment-input"
                  onChange={this.handleChange}
                />
                <button className="comment-btn">></button>
              </form>
            </div>
          </div>
          {/* </div> */}
        </section>
      </div>
    )
  }
}

export default UserMessages