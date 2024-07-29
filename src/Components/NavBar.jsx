import React from 'react'
import logo from '../assets/images/Image1.png.png'
import group37 from '../assets/images/Group 39.png'

const NavBar = () => {
  return (
    <>
     <div className="nav-container">
    <div className="nav-logo">
        <img src={logo} alt="" />
    </div>
      <div className="text-log">
        <img src={group37} alt="" />
        <div className="text-area">
            <h3>Join Discord</h3>
        </div>
      </div>
    </div>
    </>
  )
}

export default NavBar