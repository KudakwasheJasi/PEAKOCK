import React from 'react'
import group36 from '../assets/images/Group 36.png'
import ServiceCards from './ServiceCards'

const Services = () => {
  return (

     <>
    <div id="services">
          <div className="group36">
        <img src={group36} alt="" />
        </div>
        <div className="service-container">
           <ServiceCards/>
        </div>
    </div>
     
     </>
  )
}

export default Services