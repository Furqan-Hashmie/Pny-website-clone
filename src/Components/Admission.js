import React from 'react'

const Admission = () => {
  return (
    <div>
      <div>
        <img src='Images/home-slider.jpg' className='slider'></img>
      </div>
      <br/>
   <div className='d-flex'>
   <div className='row'>
        <div className='col-lg-4 bu'>
             <button className='btn btn-danger mt-3 n'>How To Apply</button><br/>
             <button className='btn btn-primary mt-2 n'>QUICK LINKS </button><br/>
             <button className='btn btn-success mt-2 n'>Fee Structure</button><br/>
             <button className='btn btn-info mt-2 n'>Policy</button><br/>
             <button className='btn btn-warning mt-2 n'>Code of Conduct</button><br/>
             <button className='btn btn-secondary mt-2 n'>FAQ'S</button><br/>
             <button className='btn btn-danger mt-2 n'>Contacts</button><br/>
        </div>
      </div>
      <div className='row'>
    
          <h2 className='mx-5 admission-h'>How to Apply</h2>
         <div className='admission-btn'>
         <button className='btn btn-outline-warning mx-2 my-2'>Online Apply Process</button> 
          <button className='btn btn-outline-info mx-2 my-2'>Manual Apply Process</button> 
         </div>
        <div className='d-flex mt-4'>
        <div className='col-lg-4 mx-5'>
        <iframe width="334" height="188" src="https://www.youtube.com/embed/7rgdll8OVms" title="How to Apply For Online Admission | PNY Trainings | Best Institute in Pakistan" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className='col-lg-4 mx-5'>
      <iframe width="334" height="188" src="https://www.youtube.com/embed/nE28SNx7Ej8" title="How to Apply For Manual Admission | PNY Trainings | Best Institute in Pakistan" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
        </div>
        <div className='steps'>
          <h2 className='num'>Step 1:</h2>
          <h4> <li className=''> Visit the campus or our official website www.pnytrainings.com, to find detailed <br/> information regarding our various programs.</li></h4>
          <h2 className='num'>Step 2:</h2>
          <h4> <li>After deciding on the program, interested students can apply by completing <br/> the online form available at www.pnytrainings.com/how-apply-online The application  <br/>  processing fees can be paid online or through bank transfer, alternatively payment can <br/> also be made at the  Admissions Office.</li></h4>
          <h2 className='num'>Step 3:</h2>
          <h4> <li>  Admission forms can be submitted online through PNY Online Admission Website. <br/> After submission, the candidate will be issued a reference number And Will Be Informed <br/> on your official number or through an Email.</li></h4>
          <h2 className='num'>Step 4:</h2>
          <h4> <li>Candidates will be required to deposit dues within the deadline to get the registration <br/> number and first-semester courses detail.
All the students are expected to attend an <br/> orientation  session; they are also welcome to collect their timetables from our information <br/> desk through an Email</li></h4>
   <h4 className='mt-3'> In case of any query, feel free to contact the Admissions Office at any time. We look <br/> forward to hearing from you!</h4>
        </div>
      </div>
      </div>
      </div>
 

 
  )
}

export default Admission