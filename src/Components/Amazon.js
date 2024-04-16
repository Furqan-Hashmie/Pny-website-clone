import React from 'react'
import { Link } from 'react-router-dom'

const Amazon = () => {
  return (
    <div className='mt-3'>
    <div>
        <img src='Images/amazon-services.jpg.webp' className='slidera'></img>
    </div>
      <center>
     <button className='btn btn-outline-success amazon'><Link to={"https://www.eraflip.com"} className='lik color:success'>Browse Course</Link></button>
      </center>
  
    </div>
  )
}

export default Amazon