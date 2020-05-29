import React from 'react'

const ProfileDetails = ({ name, title, value, handleChange }) => {
  // console.log()
  return (

    <div className="input-box">
      <h3 className="edit-titles">{title}</h3>
      <input
        className="input"
        name={name}
        value={value ? value : ""}
        onChange={handleChange}
      />
    </div>

  )

}

export default ProfileDetails