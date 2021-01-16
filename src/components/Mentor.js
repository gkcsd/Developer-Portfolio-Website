import React from "react";
import logo3 from "../images/testimonials/t1.jpg";
import logo4 from "../images/testimonials/t1.jpg";
import logo5 from "../images/testimonials/t1.jpg";
import logo6 from "../images/testimonials/t1.jpg";
import MentorList from "./MentorList";

const Mentor = () => {
  return (
    <section id="mentors" className="mentor-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 text-center mentor-title">
            <h1 className="text-uppercase title-text">
              Some Words By My Mentors
            </h1>
            <p className="para">
              Some Of My Preceptors Who's helped me alot for my growth and give
              me courage and knowledge with great excelleny, And here their
              words about me, my behaviour and my works which i have done under
              their guidence and their words are means alot for me.. Thank You !
            </p>
          </div>
        </div>
        <div className="container mentor-list">
          <div className="row">
            <MentorList
              logo={logo3}
              title={"Sundar Pichai"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              }
            />
            <MentorList
              logo={logo4}
              title={"Sundar Pichai"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              }
            />
            <MentorList
              logo={logo5}
              title={"Sundar Pichai"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              }
            />
            <MentorList
              logo={logo6}
              title={"Sundar Pichai"}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Mentor;
