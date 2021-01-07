import React from "react";
import logo3 from "../images/testimonials/t1.jpg";
import logo4 from "../images/testimonials/t1.jpg";
import logo5 from "../images/testimonials/t1.jpg";
import logo6 from "../images/testimonials/t1.jpg";


const Mentor = () => {
    return (
        <section id="mentors" className="mentor-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 text-center mentor-title">
                <h1 className="text-uppercase title-text">Some Words By My Mentors</h1>
                <p className="para">
                  Some Of My Preceptors Who's helped me alot for my growth and give me courage and knowledge with great excelleny, And here their words about me, my behaviour and my works which i have done under their guidence and their words are means alot for me.. Thank You ! 
                </p>
            </div>
          </div>
          <div className="container mentor-list">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="mentors">
                  <div className="mentors-img text-center py-4">
                      <img src={logo3} alt="m1"  className="rounded-circle animate__animated animate__wobble" width="140" height="140" />
                  </div>
                  <div className="card-body text-center">
                      <h5 className="card-title text-uppercase font-roboto">Sundar Pichai ,Google</h5>
                      <p className="card-text text-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus expedita laboriosam aliquid explicabo sint, fugit deleniti voluptatum consequatur. Vero sapiente id odit totam animi assumenda exercitationem sit dolores tempora qui?
                      </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="mentors">
                  <div className="mentors-img text-center py-4">
                      <img src={logo4} alt="m1"  className="rounded-circle animate__animated animate__wobble" width="140" height="140" />
                  </div>
                  <div className="card-body text-center">
                      <h5 className="card-title text-uppercase font-roboto">Sundar Pichai ,Google</h5>
                      <p className="card-text text-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus expedita laboriosam aliquid explicabo sint, fugit deleniti voluptatum consequatur. Vero sapiente id odit totam animi assumenda exercitationem sit dolores tempora qui?
                      </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="mentors">
                  <div className="mentors-img text-center py-4">
                      <img src={logo5} alt="m1"  className="rounded-circle animate__animated animate__wobble" width="140" height="140" />
                  </div>
                  <div className="card-body text-center">
                      <h5 className="card-title text-uppercase font-roboto">Sundar Pichai ,Google</h5>
                      <p className="card-text text-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus expedita laboriosam aliquid explicabo sint, fugit deleniti voluptatum consequatur. Vero sapiente id odit totam animi assumenda exercitationem sit dolores tempora qui?
                      </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="mentors">
                  <div className="mentors-img text-center py-4">
                      <img src={logo6} alt="m1"  className="rounded-circle animate__animated animate__wobble" width="140" height="140" />
                  </div>
                  <div className="card-body text-center">
                      <h5 className="card-title text-uppercase font-roboto">Sundar Pichai ,Google</h5>
                      <p className="card-text text-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus expedita laboriosam aliquid explicabo sint, fugit deleniti voluptatum consequatur. Vero sapiente id odit totam animi assumenda exercitationem sit dolores tempora qui?
                      </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    );
};
export default Mentor;