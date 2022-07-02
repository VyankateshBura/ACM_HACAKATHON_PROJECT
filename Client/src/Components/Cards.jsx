import React from 'react'
import Images from '../Images/Images'
const Cards = () => {
  return (
    <div className='col-xs-12 col-sm-4 section'>
        <div className='card'>
            <img  src={Images.paper} style={{margin:"10%",width:'25vw',height:'25vh'}}/>
        </div>
        <div className='content'>

        </div>
        <hr></hr>
        <div className='click'>
            Click 
        </div>
    </div>
        
  )
}

export default Cards