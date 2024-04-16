import React from 'react'
import { Link } from 'react-router-dom'

const Training = () => {
  return (
    <div>
       <div>
        <img src='Images/home-slider.jpg' className='slidera'></img>
    </div>
      <center>
     <button className='btn btn-outline-success amazon'><Link to={"https://www.pnytrainings.com/training-schedule"} className='lik'>Check Schedule</Link></button>
      </center>
  
    </div>
  )
}

export default Training