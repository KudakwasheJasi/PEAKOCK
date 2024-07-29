import React from 'react'
import flock from '../assets/images/Group 37.png'

const Hero = () => {
  return (
    
    <>
    <div className="hero-container">
        <div className="hero-text">
            <p>The collective is a collection of 5500 Peacocks<br/>that are the access cards to the Tropic.</p>
            <p>These fowls serve as a membership pass to not<br/>just live events, extensive Merchandise and NFT<br/>drops but also as one of its kind  pass to<br/>experiences and venues that can be accessed<br/>much more frequently think once a week at your<br/>discretion navigate it, is together.</p>
            <p>The Tropic will be a place for the collective to<br/>think, create and contribute to the community by<br/>partcipating in all major decisions for the future.</p>
        </div>
        <div className="hero-image">
            <img src={flock} alt=""  className='flock-image'/>
              <div className="flock-text">
            <h6>Join the Flock</h6>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Hero