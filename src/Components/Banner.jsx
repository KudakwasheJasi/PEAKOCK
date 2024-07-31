import React from 'react'
import group34 from '../assets/images/Group 35.png'
import group4 from '../assets/images/Group 35.png'

const Banner = () => {
  return (
   <>
   <div id="banner">
     <div className="banner-container">
             <div className="banner-area">
        <h2><span>The</span><img src={group34} className='banner0' alt="" /><b>Collective</b></h2>
        </div>
          <div className="text3">
        <p>Join the Flock</p>
        </div>
        <div className="text0">
            <p>discover</p>
            <div className="line-container"></div>
        </div>
         <div className="banner-text">
            <h3>The <img src={group4} className='banner1' alt="" />Collective</h3>
               <div className="text4">
            <p>is just that - a collective.</p>
            </div>
        <div className="banner3">
            <p>A collective of early adapters and<br/> innovators to create a brand and a <br/> Community</p>
            </div>
            <div className="banner4">
                <p>The Metaverse is a space of infinite<br/> opportunities and the best way to <br/>navigate it, is</p> together
            </div>
         </div>
     </div>
   </div>
   </>
  )
}

export default Banner