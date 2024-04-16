import React from 'react'
import '../CSS-FILES/Feilds.css';
import { Link } from 'react-router-dom';
const Feildscard = () => {
  return (
    
   <div className='feild-bg mt-2'>
     <div className='container-fluid'>
    <h3 className='start'>Start Learninig</h3>
    <div className='row mt-3'>
        <div className=' d-flex'>
            <div className='card col-md-4'>
                <div className='card-body'>
                    <h3 className='card-title'>Development</h3>
                    <p className='card-text'>By learning these advanced courses, you will understand the fundamentals of object-oriented programming and how to write...</p>
                    <Link to={"/development"}> <button type="button" class="btn btn-outline-warning">View courses</button></Link>
                </div>
            </div>
            <div className='card col-md-4'>
                <div className='card-body'>
                    <h3 className='card-title'>Marketing</h3>
                    <p className='card-text'>Learn how to do SEO, SMO, PPC, CPL, Web analytics, and social media marketing through our highly advanced and strategic-...</p>
                 <Link to={"/marketing"}><button type="button" class="btn btn-outline-warning">View courses</button></Link>
                </div>
            </div>
            <div className='card col-md-4'>
                <div className='card-body'>
                    <h3 className='card-title'>Art & Design</h3>
                    <p className='card-text'>Our comprehensive design training classes teach you about design techniques as well as how to use various software to cr...</p>
                    <button type="button" class="btn btn-outline-warning">View courses</button>
                </div>
            </div>
        </div>
        <div className='d-flex'>
        <div className='card col-md-4'>
                <div className='card-body'>
                    <h3 className='card-title'>IT & Software</h3>
                    <p className='card-text'>Learn how to handle realistic computer problems and run operating systems fruitfully in information technology and softw...</p>
                    <button type="button" class="btn btn-outline-warning">View courses</button>
                </div>
            </div>
            <div className='card col-md-4'>
                <div className='card-body'>
                    <h3 className='card-title'>Business & Accounts</h3>
                    <p className='card-text'>Learn the business library as a professional, which teaches you how to organize software and technology that leads acros...</p>
                    <button type="button" class="btn btn-outline-warning">View courses</button>
                </div>
            </div>
            <div className='card col-md-4'>
                <div className='card-body'>
                    <h3 className='card-title'>Multimedia</h3>
                    <p className='card-text'>Learn the advanced methods of taking pictures and build a portfolio that showcases your professional photography skills....</p>
                    <button type="button" class="btn btn-outline-warning">View courses</button>
                </div>
            </div>
        </div>
    </div>
    <div className='row'>
 <div className='col-lg-12 my-4'>
 <center> <button type="button" class="btn btn-warning w-50 fs-4 fw-bold">Browse Courses</button></center>
 </div>       
    </div>
    </div>
   </div>
  )
}

export default Feildscard