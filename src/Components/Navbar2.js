import React from 'react'
import "../CSS-FILES/Navbar2.css"
import { Link } from 'react-router-dom'

const Navbar2 = () => {
  return (
    <div className='container-fluid'>
        <nav className="navbar navbar-expand-lg bg-white">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><img src='Images/school-logo.jpg' alt='img' className='img'/></a>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="bi bi-grid-3x3-gap-fill icon"></i><span className='span'>Categories</span>
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#"><i class="bi bi-brightness-low-fill"></i><span>Google Scholarship Certificate</span></a></li>
            <li><a className="dropdown-item" href="#"><i class="bi bi-laptop"></i><span>Fast Tract Pro Bootcamps in 2023</span></a></li>
            <li><a className="dropdown-item" href="#"><i class="bi bi-brightness-low-fill"></i><span>One Year Diploma</span></a></li>
            <li><a className="dropdown-item" href="#"><i class="bi bi-gear-fill"></i>Development</a></li>
            <li><a className="dropdown-item" href="#"><i class="bi bi-megaphone-fill"></i>Markiting</a></li>
            <li><a className="dropdown-item" href="#"><i class="bi bi-card-image"></i>Art & Design</a></li>
            <li><a className="dropdown-item" href="#"><i class="bi bi-bar-chart-line-fill"></i>Business & Accounts</a></li>
            <li><a className="dropdown-item" href="#"><i class="bi bi-camera-video-fill"></i>Multimedia</a></li>
            <li><a className="dropdown-item" href="#"><i class="bi bi-amazon"></i>Amazon Courses</a></li>
            <li><a className="dropdown-item" href="#"><i class="bi bi-arrow-left-right"></i>Cyber Scurity& Networking</a></li>
            <li><a className="dropdown-item" href="#"><i class="bi bi-globe-central-south-asia"></i>Ecommerce & OnlineBusiness</a></li>
            <li><a className="dropdown-item" href="#"><i class="bi bi-disc"></i>iT & Software</a></li>
            <li><a className="dropdown-item" href="#"><i class="bi bi-globe-asia-australia"></i>Language</a></li>
            <li><a className="dropdown-item" href="#"><i class="bi bi-person-standing-dress"></i>Pny Pink(For Female)</a></li>
            <li><a className="dropdown-item" href="#"><i class="bi bi-hand-thumbs-up"></i>Pny Genius (For Kids)</a></li>
            <li><a className="dropdown-item" href="#"><i class="bi bi-briefcase-fill"></i>Boot Camps</a></li>
          </ul>
          
        </li>
        
      </ul>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav me-auto mb-2 mb-lg-0 components active ">
    <li className="nav-item">
          <Link className="nav-link home" to="/">Home</Link>
    </li>
    <li className="nav-item ">
      <Link className="nav-link  about" aria-current="page" to="/about">About Us</Link>
    </li>
    <li className="nav-item ">
      <Link className="nav-link  career"  to="/career">Careers</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link  blog"  to={"https://www.pnytrainings.com/blog"}>Blogs</Link>
    </li>

  </ul></div>
      <form className="d-flex bar" role="search">
      <div class="input-group">
      <input type="text" class="form-control" placeholder="Search for the software or skills you want to learn" aria-label="Search for the software or skills you want to learn" aria-describedby="basic-addon1"/>
      <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>
    </div>
      </form>
     

    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar2