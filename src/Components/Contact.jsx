import React from 'react'
import group27 from '../assets/images/Group 27.png'
 

const Contact = () => {
  return (
   
    <>
    
    <div id="contact">
        <div className="contact-container">
            <div className="contact-image">
            <img src={group27} alt="" />
            </div>
            <div className="contact-text">
                <h5>Share your ideas on how to better the collective</h5>
            </div>
            <form action="" method="get">
                <textarea name="" id="" cols="40" placeholder='start typing' rows="10"></textarea>
                <input type="submit" value="submit"  className='btn' />
              
            </form>
        </div>
    </div>
    </>
  )
}

export default Contact