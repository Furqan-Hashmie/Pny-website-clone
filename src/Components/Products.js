import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import shirtsdata from '../Api/shirtsdata'

const Products = () => {
  const [data, setData] = useState(shirtsdata)
  return (
    <div className='container-fluid'>
      <div className='row'>
        {data.map((x)=>{
         return (
          <div className='col-lg-4 mt-3'>
          <div className="card mx-5" style={{ width: '20rem' }}>
              <img src={x.image} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{x.title}</h5>
                <p className="card-text fs-5">{x.description.slice(0,40)}...</p>
                <Link className="btn btn-success">ADD TO CART</Link>
              </div>
            </div>
          </div>


         )
        })}
      </div>
    </div>
  )
}

export default Products