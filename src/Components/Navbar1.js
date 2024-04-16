import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS-FILES/Navbar.css';
import { Badge } from '@mui/material';

const Navbar1 = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-secondary d-flex">
  <div className="container-fluid">
    
 <ul>
 <div className='contact d-flex'>
     <Link className="navbar-brand bold" to="#"><i class="bi bi-envelope-at"></i> info@pnytrainings.com</Link>
        <Link className="navbar-brand bold" to="#"><i class="bi bi-telephone-fill"></i> 03041111774</Link>
     </div>
 </ul>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav text">
  
        <li className="nav-item d-flex">
          <Link className="nav-link color" to="/amazon">Amazon courses</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link color" to="/kids">Kids courses</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link color" to="/female">Female courses</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link color" to="/training">Training schedule</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link color" to="/fee">Fee Structure</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link color" to="/admission">Admission Info</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link color" to="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/login"><button type="button" className="btn btn-outline-info " >Signup</button></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/enroll"><button type="button" className="btn btn-outline-warning"> Enroll</button></Link>
        </li>
        <li className="nav-item">
              <Link to='/cart' className="nav-link text-white">  <Badge badgeContent={1} color="primary">
      <i class="fa-solid fa-cart-shopping"></i>
    </Badge></Link>
              </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar1