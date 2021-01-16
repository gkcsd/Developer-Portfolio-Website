import React from "react";
import cont from "../images/banner/question.png";

const Contact = () => {
  return (
    <section id="contact" className="contactsection">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 form">
            <form
              className="sentMessage"
              action="https://formspree.io/f/mayllryq"
              method="POST"
              id="contactForm"
              novalidate
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="fullname"
                      className="form-control"
                      placeholder="Your Name *"
                      id="name"
                      required
                      data-validation-required-message="Please enter your name."
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Your Email *"
                      id="email"
                      required
                      data-validation-required-message="Please enter your email address."
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="Your Phone *"
                      id="phone"
                      required
                      data-validation-required-message="Please enter your phone number."
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <textarea
                      name="text-area"
                      className="form-control"
                      placeholder="Your Message *"
                      id="message"
                      required
                      data-validation-required-message="Please enter a message."
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="clearfix"></div>
                <div className="col-lg-12 text-center contactbutton">
                  <div id="success"></div>
                  <button name="submit" type="submit" className="btn btn-xl">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-4">
            <div className="col-lg-12 img">
              <img src={cont} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
