import React, { useState } from 'react'
import marketingdata from '../Api/Feildmarketing'
import { Link} from 'react-router-dom'

const Marketing = () => {
  
    const [info , setInfo] = useState(marketingdata)
    console.log(setInfo)
  return (
    <div className='container-fluid'>
   <center>    <button className='btn btn-outline-primary w-50' ><h2>Top Courses in Marketing</h2></button></center>
 <div className='row'>
  {info.map((x)=>{
    return (
        <div className='col-lg-4'>
                <div className="card develop-card mt-5">
                 <Link to={`/marketing/${x.id}`}> <img src={x.image} className='develop-img' alt="..." /></Link>
                  <div className="card-body ">
                    <h5 className="card-title develop-title">{x.title}</h5>
                    <p className="card-text develop-des">{x.description}</p>
                    <Link href="#" class="btn btn-outline-primary">{x.Price} PKR</Link>
                  </div>
                </div>
              </div>
    )
  })} 
 


 </div>

    </div>
  )
}

export default Marketing