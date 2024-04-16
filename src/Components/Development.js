import React, { useState } from 'react'
import development from '../Api/FeilddevelopmentApi'
import { Link, Outlet } from 'react-router-dom'

const Development = () => {

    const [a , setA] =useState(development)
    console.log(setA)
  return (
    <div className='container-fluid'>
   <center>    <button className='btn btn-outline-danger w-50' ><h2>Top Courses in Development</h2></button></center>
 <div className='row'>
  {a.map((x)=>{
    return (
        <div className='col-lg-4'>
                <div className="card develop-card mt-5">
                 <Link to={`/development/${x.id}`}> <img src={x.image} className='develop-img' alt="..." /></Link>
                  <div className="card-body ">
                    <h5 className="card-title develop-title">{x.title}</h5>
                    <p className="card-text develop-des">{x.description}</p>
                    <Link href="#" className="btn btn-outline-danger">{x.Price}</Link>
                  </div>
                </div>
              <Outlet/>
              </div>
    )
  })} 
 


 </div>
    </div>
  )
}

export default Development