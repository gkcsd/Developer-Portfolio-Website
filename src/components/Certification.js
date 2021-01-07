import React from "react";
import ban1 from "../images/banner/page.jpg";
import ban2 from "../images/banner/page.jpg";
import ban3 from "../images/banner/page.jpg";


const Certification = () => {
    return (
        <section id="certification" className="certifications">
        <div className="container-fluid certification-baground">
          <div className="row">
            <div className="col-lg-12 text-center mentor-title justify-content-center">
              <h1 className="text-uppercase title-text pb-5 pt-5">Certification</h1>
              
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                  <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                  <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={ban1} className="d-block w-100" alt="Cert1" />
                  </div>
                  <div className="carousel-item">
                    <img src={ban2} className="d-block w-100" alt="Cert2" />
                  </div>
                  <div className="carousel-item">
                    <img src={ban3} className="d-block w-100" alt="Cert3" />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </a>
              </div>
             </div>
          </div>
        </div>
      </section>      
    );
};
export default Certification;