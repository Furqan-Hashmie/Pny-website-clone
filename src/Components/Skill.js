import React from 'react'
import '../CSS-FILES/Skill.css';

const Skill = () => {
  return (
   
    <div className='skill-bg'>
       <div className='container-fluid mx-5 '>
       <center ><h3 className='skill-head'> Why Skill Share? </h3></center>
     <div className='row mt-5'>
       <div className='col-lg-4 d-flex'>
       <img src='/Images/people.png' alt='skillshare'/> 
      <div className='text'>
      <h4>Connect with Peers</h4>
       <p>Choose What you’d like to learn from our extensive subscription library.</p>
      </div>
       </div>
       <div className='col-lg-4 d-flex'>
       <img src='/Images/pencil box.png' alt='skillshare'/> 
      <div className='text'>
      <h4>Learn by Doing</h4>
       <p>Learn from industry experts who are passionate about teaching.</p>
      </div>
       </div>
       <div className='col-lg-4 d-flex'>
       <img src='/Images/stairs.png' alt='skillshare'/> 
      <div className='text'>
      <h4>Be Future Proof</h4>
       <p>Switch between your computer, tablet, or <br/> mobile device.</p>
      </div>
       </div>
     </div>
       </div>
    </div>
    
  )
}

export default Skill