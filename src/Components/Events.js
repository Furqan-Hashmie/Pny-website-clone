import React from "react";
import "../CSS-FILES/Events.css";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div className="bg-event">
      <div className="container-fluid">
        <center>
          <h3>Upcoming Events</h3>
        </center>
        <div className="row d-flex">
          <div className="col-md-6">
            <div className="card event-card topcard">
              <div className="card-body">
                <div className="d-flex">
                  <h3 className="cardimg">
                    <img src="/Images/img 1.png" className="eventimg"  alt=""/>
                  </h3>
                  <p className="card-text eventtext">
                    Become a Professional Photographer <br /> (Beginner to Pro)
                    <p className="eventdate">Jun 24, 2023</p>
                  <Link to={"/enroll"}>
                  <button className="btn btn-outline-success">
                      Read more <i class="bi bi-arrow-bar-right log"></i>
                    </button>
                  </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card event-card topcard">
              <div className="card-body">
                <div className="d-flex">
                  <h3 className="cardimg">
                    <img src="/Images/img 2.png" className="eventimg" alt="" />
                  </h3>
                  <p className="card-text eventtext">
                    The Complete Guide To Amazon Dropshipping <br /> (Beginner
                    to Pro)
                    <p className="eventdate">Jul 14, 2023</p>
                    <button className="btn btn-outline-success">
                      Read more <i class="bi bi-arrow-bar-right log"></i>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card event-card ">
              <div className="card-body">
                <div className="d-flex">
                  <h3 className="cardimg">
                    <img src="/Images/img 3.png" className="eventimg" alt="" />
                  </h3>
                  <p className="card-text eventtext">
                    Learn WordPress Full Customization <br /> (Create Your Own
                    Website)
                    <p className="eventdate">Jun 10, 2023</p>
                 <Link to={"/wordpress"}>
                 <button className="btn btn-outline-success">
                      Read more <i class="bi bi-arrow-bar-right log"></i>
                    </button>
                 </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card event-card ">
              <div className="card-body">
                <div className="d-flex">
                  <h3 className="cardimg">
                    <img src="/Images/img 1.png" className="eventimg"  alt=""/>
                  </h3>
                  <p className="card-text eventtext">
                    Analyzing & Visualizing Data with Microsoft Power BI <br />{" "}
                    (Beginner to Pro)
                    <p className="eventdate">May 20, 2023</p>
                    <button className="btn btn-outline-success">
                      Read more <i class="bi bi-arrow-bar-right log"></i>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 mt-5">
            <center>
              {" "}
              <button type="button" class="btn btn-success w-50 fs-4 fw-bold rounded">
                View All Events
              </button>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
