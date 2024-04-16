import React from 'react'

const Career = () => {
  return (
    <div>
      <div className='mt-2'><img src='/Images/carrer.jpg' alt='' className='care-img'></img></div>
      <div className='container-fluid'>
        <div className='row'>
          <div className="card care-bg mx-5">
            <div className="card-body  width">
              <h4 className='career'>Careers</h4>
              <p className="card-text">
                PNY Trainings, one of the best and recognized IT Training Institute in Pakistan provides world-class IT training programs and certifications to the global participants. PNY Trainings was founded in the year 2014, by Wahab Yunas, with the vision to divulge world-class IT training programs and certification to people across the globe and assist them in making their career more fulfilling.
              </p>

            </div>
          </div>
        </div>
        <div className="p-5 mb-4 bg-body-secondary rounded-3">
      <div className="container-fluid">
        <h3 className=" fw-bold mx-5 mb-5">PNY Training Offer Job Opportunitues For Instructors</h3>
        <div className=' d-flex'>
        <div className='instructor'>
        <strong className='mt-3'> <p>Professional Instructors</p></strong>
        <h5>    <p className="col-lg-8 fs-4">PNY Trainings is hiring Instructors of different fields, Grab this opportunity ASAP!</p></h5>
        <strong>
        <li className='mt-2'>Qualification: Minimum Graduation (Candidates with BSCS will be preferred)</li>
         <li className='mt-3'>Experience required: more than 3 years</li>
        </strong>
        <button className="btn btn-warning mt-4 fw-bold" type="button">Apply Now</button>
        </div>
        <div className='col-lg-4'>
          <img src='/Images/job career.jpg' alt='img' className='hiring'></img>
        </div>
        </div>
      </div>
    </div>

      </div>
    </div>
  )
}

export default Career