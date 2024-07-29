import React from 'react'
import data from '../../data/data'
import group24 from '../assets/images/Group 24.png'
import group25 from '../assets/images/Group 25.png'

const ServiceCards = () => {
  return (

    <>
    {data && data.ServicesCards.map(card =>{

        return(
            <div className="ServiceCards">
                <div className="img">
                    <img src={card.Image} alt="" />
                    <div className="textbox">
                        <h2>{card.title}</h2>
                        <p>{card.desc}</p>
                    </div>
                    </div>
                    <div className="text-images">
                        <img src={group24} alt="" />
                        <div className="text-pic">
                         <img src={group25} alt="" />
                    </div>
                    </div>
                </div>
        )
    })}
    
    </>
  )
}

export default ServiceCards