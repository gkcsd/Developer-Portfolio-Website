import React from "react";
import logo1 from "../images/banner/bannerimage3.png";

const Header = () => {
    return (
        <header className="header-section">
        <div className="container-fluid header-main">
            <div className="row">
                <div className="row">
                    <div className="col-lg-6 col-md-12 banner-info">
                      <h3 className="title-text">Hey</h3>
                      <h1 className="title-text text-uppercase">I am Ganesh Kale</h1>
                      <h4 className="title-text text-uppercase sink">Full stack developer & Competitive Coder</h4>
                      <div className="site-buttons">
                        <div className="d-flex felx-row flex-wrap">
                         <a href="#contact"><button type="button" className="btn btn-primary first text-uppercase">Hire me</button></a>
                          <a href="#projects"><button type="button" className="btn btn-light second text-uppercase">My Work</button></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 banner-img img-responsive">
                      <img src={logo1} alt="This is comp img" className="img-fluid" />
                    </div>
                  </div>
            </div>
        </div>
    </header>
    );
};
export default Header;