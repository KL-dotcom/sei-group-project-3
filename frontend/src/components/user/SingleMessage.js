
// import React from 'react'
// import axios from 'axios'
// import { getOwnProfile } from '../../lib/api'
// import { withHeaders } from '../../lib/auth'
// import SingleMessage from './SingleMessage'

// class UserMessages extends React.Component {
//   state = {
//     user: null,
//     pending: ''
//   }
//   async componentDidMount() {
//     try {
//       const res = await getOwnProfile()
//       this.setState({ user: res.data })

//     } catch (err) {
//       console.log(err)
//     }
//   }

//   handleSubmit = async e => {
//     // const messageId = '5ec57f4646188997e7d01406'
//     // const userId = '5ec57f99ff7c4497f69eed95'
//     try {
//       e.preventDefault()
//       e.target.reset()
//       const res = await axios.post(`/api/users/5ec57f4646188997e7d01406/5ec57f99ff7c4497f69eed95`, { text: this.state.pending }, withHeaders())
//       console.log(res.data)
//       this.setState((state, props) => {
//         console.log(state.user.messages)
//         state.user.messages.find(({ _id }) => {
//           return _id === res.data._id
//         }).comment = res.data.comment
//         return state
//       })
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   handleChange = e => {
//     const text = e.target.value
//     console.log(text)
//     this.setState({ pending: text })
//   }

//   render() {
//     const { user } = this.state
//     if (!user) return <p>Loading</p>

//     return (
//       <section>
//         <h1>Your Messages</h1>
//         {user.messages?.map(obj => (
//           <div>
//             <p>Your conversation with: {obj.sender?.username}</p>
//             <p>{obj.text}</p>

//             {obj.comment?.map(item => (
//               <p>{item.text}</p>
//             ))}
//             <br />

//             <div>
//               <form onSubmit={this.handleSubmit}>
//                 <textarea
//                   placeholder="Leave a message..."
//                   className="comment-input"
//                   onChange={this.handleChange}
//                 />
//                 <button className="comment-btn">+</button>
//               </form>
//             </div>
//             <hr />
//           </div>
//         ))}

//       </section>
//     )
//   }
// }

// export default UserMessages