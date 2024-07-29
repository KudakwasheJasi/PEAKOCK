import React from 'react'
import group6 from '../assets/images/Group 6.png'
import pic1 from '../assets/images/Image2.png.png'
import pic2 from '../assets/images/Image2.png.png'
import pic3 from '../assets/images/Image2.png.png'
import pic4 from '../assets/images/Image2.png.png'
import pic5 from '../assets/images/Image2.png.png'

const Footer = () => {
  return (
  
     <>
     
     <div id="footer">
        <div className="footer-container">
            <div className="footer-pic">
                <img src={group6} alt="" />
            </div>
             <div className="footer-image">
                 <div className="footer-pic1">
                <img src={pic1} alt="" />
                <div className="footer-text1">
                <h4>John Doe</h4>
                <p>Founder & Curator</p>
                </div>
                </div>
                  <div className="footer-pic2">
                <img src={pic2} alt="" />
                <div className="footer-text2">
                <h4>John Doe</h4>
                <p>Founder & Curator</p>
                </div>
                </div>
                  <div className="footer-pic3">
                <img src={pic3} alt="" />
                <div className="footer-text3">
                <h4>John Doe</h4>
                <p>Founder & Curator</p>
                </div>
                </div>
                  <div className="footer-pic4">
                <img src={pic4} alt="" />
                <div className="footer-text4">
                <h4>John Doe</h4>
                <p>Founder & Curator</p>
                </div>
                </div>
                  <div className="footer-pic5">
                <img src={pic5} alt="" />
                 <div className="footer-text5">
                <h4>John Doe</h4>
                <p>Founder & Curator</p>
                </div>
                </div>
             </div>
        </div>
     </div>
     </>
  )
}

export default Footer