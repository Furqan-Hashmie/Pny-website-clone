import React from 'react'

const Slider = () => {
  return (
 <div className='sk'>
       <div>
        <img src='Images/home-slider.jpg' className='slider'></img>
    </div>
    <div className='container-fluid elements'>
        <div className="firstfooter">
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb breadcrumb-custom overflow-hidden text-center bg-body-tertiary border rounded-3 firstfootermid">
      <li className='unlimited'>
        <a className="link-body-emphasis fw-semibold text-decoration-none" href="#">
          <i><img src='/Images/01.png' alt='img'/></i>
          <h4>Unlimited Access</h4>
          <p>Choose What you’d like to learn from our extensive <br></br>subscription library.</p>
        </a>
      </li>
      <li className='learn'>
        <a className="link-body-emphasis fw-semibold text-decoration-none" href="#">
          <i><img src='/Images/02.png' alt='img'/></i>
          <h4>Learn Anywhere</h4>
          <p>Learn from industry experts who are passionate <br></br>about teaching.</p>
        </a>
      </li>
      <li className='customize'>
        <a className="link-body-emphasis fw-semibold text-decoration-none" href="#">
          <i><img src='/Images/03.png' alt='img'/></i>
          <h4>Customizability</h4>
          <p>Switch between your computer, tablet, or mobile <br></br>device.</p>
        </a>
      </li>
      <button type="button" class="btn btn-outline-danger slider-after">Start My Free Trial</button>
    </ol>
    
  </nav>
</div>
    </div>
 </div>
  )
  
}

export default Slider