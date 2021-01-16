import React from "react";

const MentorList = ({ logo, title, description }) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="mentors">
        <div className="mentors-img text-center py-4">
          <img
            src={logo}
            alt="m1"
            className="rounded-circle animate__animated animate__wobble"
            width="140"
            height="140"
          />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title text-uppercase font-roboto">{title}</h5>
          <p className="card-text text-secondary">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default MentorList;
