import React from 'react'
import photoprofil from "./image/photoprofil.jpg"

function ProfilePhoto() {
  return (
    <div>
        <img src={photoprofil} alt="my profile photo"
        width="300px" height="300px"/>
    </div>
  )
}

export default ProfilePhoto