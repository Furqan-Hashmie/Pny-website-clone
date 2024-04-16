import React from 'react'

const About = () => {
  return (
    <div>
      <div className='container-fluid bg-light'>
        <div className='row'>
          <h1 className='mt-2 about-head'>Our Institute</h1>

          <div className='col-lg-5 about-text mt-5'>
            <p>
              PNY Trainings is the first choice of students who want to excel in the field of Internet Marketing. PNY Trainings consists of Top Level Trainers who are adept in the fields of Internet Marketing. We are the pioneer institute that started comprehensive Training for the benefit of students. Since our launch, thousands of students are trained and secured good jobs in the expanding IT industry as we all know. Contact us and secure your seat for upcoming training, events, and seminars.
            </p>

            <p>
              Diversity and inclusion of thought, skill, knowledge, and culture make PNY Trainings more competitive, more resilient, and better. Diversity strengthens us by promoting unique viewpoints and challenging each of us, every day, to think beyond our traditional frames of reference. We are committed to building a talented and diverse workforce, and to creating an environment in which every STUDENT has the opportunity to excel based on his or her performance. We believe the best way to learn is by putting your skills to use. I warmly welcome you to visit by contacting us, and discover firsthand what makes PNY Trainings special.
              <br />
              <strong>   -Wahab Yunus (CEO PNY Trainings)</strong>
            </p>
            <strong><p>OUR VISION </p></strong>
            <p>To be a training institute of choice in the region,
              providing quality skill-based education that is affordable,
              and aligned with the modern digital era & international standards.
              </p>
              <strong><p>OUR MISSION</p></strong>
              <p>To enhance our students’ skills technically, intellectually & digitally,
enabling them to attain excellence in their professional fields.</p>
          </div>
          <div className='col-lg-5 mt-5'>
            <img src='/Images/About us 1.jpg' alt='img' className='about-img'></img>
            <div className='mt-3'>         
            <iframe width="556" height="312" src="https://www.youtube.com/embed/F4Yntb7xl8k" title="Short Introduction of PNY Trainings Lahore, Pakistan" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About