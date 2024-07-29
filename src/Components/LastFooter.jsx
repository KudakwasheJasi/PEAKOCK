import React from 'react'
import image1 from '../assets/images/Image1.png.png'
import icon1 from '../assets/images/Icon awesome-discord 1.png'
import icon2  from '../assets/images/Icon ionic-logo-twitter 1.png'
import icon3 from '../assets/images/Icon awesome-instagram 1.png'


const LastFooter = () => {
  return (
    
    <>
      <div className="last-container">
         <div className="last-image">
         <img src={image1} alt="" />
         </div>
         <div className="last-icons">
            <h4>Follow Us</h4>
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
            <img src={icon3} alt="" />
         </div>
        </div>
    </>
  )
}

export default LastFooter