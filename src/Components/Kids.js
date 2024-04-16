import React from 'react'
import { Link } from 'react-router-dom'

const Kids = () => {
  return (
    <div>
        <div>
        <img src='Images/kids slider.jpg' className='slidera'></img>
    </div>
      <center>
     <button className='btn btn-outline-success amazon'><Link to={"https://www.pnygenius.com"} className='lik'>Browse Course</Link></button>
      </center>
  
      </div>
  )
}

export default Kids