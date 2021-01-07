import React from "react";
import logo2 from "../images/banner/secondimage.png";


const About = () => {
    return (
            <section id="about" className="about-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12 let-image">
              <div className="about-image">
                <img src={logo2} alt="About US IMAGE" className="img-fluid animate__animated animate__backInLeft" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 about-two">
              <h2 className="text-uppercase pt-5">
                <span>Let me</span>
                <span>introdunce</span>
                <span>Myself</span>
              </h2>
              <div className="paragraph py-4 w-75">
                <p className="para">
                  Hii, I’m A Full Stack Web Developer, Competitive Coder & I Like To Design Beautiful Responsive 
                  Websites & Solving Complex Algorithm Problems. I Love to Learn & Explorer Varous New Technologies..
                </p>
                <h2><span className="text-uppercase sech2">Skills</span></h2>
                <p className="para">
                  Web: MERN, ReactJS, NodeJS, Redux, Python Django<br/>
                  Database: MySQL, Firebase, MongoDB<br/>
                  Competitive Coder: On HackerRank, CodeForces, CodeChef, HackerEarth<br/>
                  Languages: C, C++, Java, JavaScript, Python
                </p>
              </div>
              <button type="button" className="btn btn-primary text-uppercase">DownLoad CV</button>
            </div>
          </div>
        </div>
      </section>
    );
};
export default About;