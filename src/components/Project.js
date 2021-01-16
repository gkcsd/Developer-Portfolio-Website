import React from "react";
import CardBody from "../components/CardBody";

const Project = () => {
  return (
    <secton id="projects" className="project-area">
      <div className="container-fluid">
        <div className="project-title pb-5">
          <h1 className="text-uppercase title-h1">Projects</h1>
        </div>

        {/* <div className="button-group">
          <button type="button" className="active" data-filter="*">
            All
          </button>
          <button type="button" data-filter=".reactjs">
            ReactJS
          </button>
          <button type="button" data-filter=".mern">
            MERN
          </button>
          <button type="button" data-filter=".reactnative">
            ReactNative Apps
          </button>
          <button type="button" data-filter=".pythonapps">
            Python Apps
          </button>
        </div> */}

        <div className="row grid">
          <CardBody
            title={"Instagram Clone(MERN"}
            info={
              "This clone has all features of Instagram like login, registration, add a post, like a post, comment, follow, unfollow, and real-time messaging like Instagram"
            }
            reactjs
          />
          <CardBody
            title={"Instagram Clone(MERN"}
            info={
              "This clone has all features of Instagram like login, registration, add a post, like a post, comment, follow, unfollow, and real-time messaging like Instagram"
            }
            mern
          />
          <CardBody
            title={"Instagram Clone(MERN"}
            info={
              "This clone has all features of Instagram like login, registration, add a post, like a post, comment, follow, unfollow, and real-time messaging like Instagram"
            }
            reactjs
          />
          <CardBody
            title={"Instagram Clone(MERN"}
            info={
              "This clone has all features of Instagram like login, registration, add a post, like a post, comment, follow, unfollow, and real-time messaging like Instagram"
            }
            mern
          />
          <CardBody
            title={"Instagram Clone(MERN"}
            info={
              "This clone has all features of Instagram like login, registration, add a post, like a post, comment, follow, unfollow, and real-time messaging like Instagram"
            }
            reactjs
          />
          <CardBody
            title={"Instagram Clone(MERN"}
            info={
              "This clone has all features of Instagram like login, registration, add a post, like a post, comment, follow, unfollow, and real-time messaging like Instagram"
            }
            mern
          />
        </div>
      </div>
    </secton>
  );
};
export default Project;
