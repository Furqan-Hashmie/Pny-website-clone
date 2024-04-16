import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import marketingdata from '../Api/Feildmarketing';

const Marketingdetail = () => {
    const [detail, setDetail] = useState(marketingdata);
    console.log(setDetail)
    let { id } = useParams();
    const result = detail.find((x) => x.id === id)
    return (
        <div className='page-back'>
        <div className='container mt-5'>
          <div className='row'>
          <p className='fs-2 fw-bold page-des'>{result.description}</p>
            <div className='col-lg-8'>
        <div className='d-flex'><p className='fs-4 fw-bold me-2'>Instructor Name:</p>
            <p className='fs-4 fw-bold page'>{result.title}</p></div>
         <div className='d-flex'><p className='fs-4 fw-bold me-5'>Course Price:</p>
              <p className='fs-4 fw-bold page'>{result.Price} PKR</p></div>
        <div className='d-flex'><p className='fs-4 fw-bold me-2'>Course Duration:</p>
              <p className='fs-4 fw-bold page'>{result.Duration}</p></div>
        <div className='d-flex'><p className='fs-4 fw-bold me-5'>Course Level:</p>
              <p className='fs-4 fw-bold page level'>{result.Skilllevel}</p></div>
              <button type="button" class="btn btn-outline-danger me-3 book">Book Now</button> 
              <button type="button" class="btn btn-outline-warning download">Download Course Brochure</button> <br/>
              <Link to={"/marketing"}><button type="button" class="btn btn-outline-success me-3 pay mt-3">All Courses</button> </Link>
            </div>
            <div className='col-lg-4'>
              <img src={result.image} alt='images' className='develop-img h-100 '  ></img>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Marketingdetail