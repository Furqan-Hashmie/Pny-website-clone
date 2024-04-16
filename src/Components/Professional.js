import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Professional = () => {
  return (
<div>
       <center><h2 className='photo'>   Become a Professional Photographer <br /> (Beginner to Pro)</h2></center>
     <div className='mt-5'>
     <div>
        <img src='Images/img 1.png' className='word-img'></img>
      <div className='d-flex'>  <h4 className='word-text mt-2'>Event For :</h4><h4 className='all'>All</h4></div>
      <div className='d-flex'>  <h4 className='word-text mt-2'>Event Place :</h4><h4 className='all'>Lahore (Iqbal Town)</h4></div>
      <div className='d-flex'>  <h4 className='word-text mt-2'>Start Date :</h4><h4 className='all'> August 28, 2023</h4></div>
      <div className='d-flex'>  <h4 className='word-text mt-2'>End Date :</h4><h4 className='all'> October 8, 2023</h4></div>
       </div>
       <div className='mt-3'><h2 className='word-text'>Event Info :</h2>
       <h4 className='word-text'>Branch Address :</h4>
       <h5 className='word-text'><li>Allama Iqbal Town Branch: 743 B Kashmir Block Allama Iqbal Town Lahore</li> </h5>
       <h4 className='word-text'>Google Map :</h4>
       <h5 className='word-text'><li>https://goo.gl/maps/xoZTAvqajrQwo3ep9</li> </h5>
       </div>
       <div className='d-flex two-btn'>
       <button className='btn btn-outline-danger mt-4 me-3 word-btn'>Book Now</button> 
       <button className='btn btn-outline-primary mt-4 word-btn'>Free Trial</button>
       </div>
     <Link to={"/"}>   <div className='all-event'> <button className='btn btn-warning mt-3 word-btn3'>All Events</button></div>
</Link>
     </div>
     <Outlet/>
    </div>
  )
}

export default Professional