import React from 'react'
import ProfilePhoto from './ProfilePhoto'
import Bio from "./Bio"

function Profile({FullName, Profession}) {
    const handleClick = (e) => {
        e.preventDefault();
        return alert(`hey ${FullName} you're about to click down there!`);
    }
  return (
    <div>
        <h1>Profile</h1>
        <ProfilePhoto />
        <h4>Full Name : {FullName}</h4>
        <h4>Profession : {Profession}</h4>
        <h4><Bio /></h4>
          <button onClick={handleClick} >Click here!</button>

    </div>
  )
}

export default Profile