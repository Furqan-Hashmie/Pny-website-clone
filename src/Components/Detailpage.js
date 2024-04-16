import React, { useState } from 'react'
import development from '../Api/FeilddevelopmentApi'
import { Link, useParams } from 'react-router-dom'

const Detailpage = () => {
  const [b, setB] = useState(development)
  console.log(setB)
  let { id } = useParams();
  let res = b.find((x) => x.id === id)
  return (
    <div className='page-back'>
      <div className='container mt-5'>
        <div className='row'>
        <p className='fs-2 fw-bold page-des'>{res.description}</p>
          <div className='col-lg-8'>
      <div className='d-flex'><p className='fs-4 fw-bold me-2'>Instructor Name:</p>
          <p className='fs-4 fw-bold page'>{res.title}</p></div>
       <div className='d-flex'><p className='fs-4 fw-bold me-5'>Course Price:</p>
            <p className='fs-4 fw-bold page'>{res.Price}</p></div>
      <div className='d-flex'><p className='fs-4 fw-bold me-2'>Course Duration:</p>
            <p className='fs-4 fw-bold page'>{res.Duration}</p></div>
      <div className='d-flex'><p className='fs-4 fw-bold me-5'>Course Level:</p>
            <p className='fs-4 fw-bold page'>{res.Skilllevel}</p></div>
            <button type="button" className="btn btn-outline-danger me-3 book">Book Now</button> 
            <button type="button" className="btn btn-outline-warning download">Download Course Brochure</button> <br/>
            <Link to={"/development"}>  <button type="button" className="btn btn-outline-success me-3 pay mt-3">All Courses</button> </Link>
          </div>
          <div className='col-lg-4'>
            <img src={res.image} alt='images' className='develop-img h-100 '  ></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detailpage