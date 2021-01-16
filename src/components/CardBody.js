import React from "react";

const CardBody = ({ info, title }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 element">
      <div className="card-body text-center">
        <h5 className="card-title text-uppercase font-roboto">{title}</h5>
        <p className="card-text text-secondary">{info}</p>
      </div>
    </div>
  );
};
export default CardBody;
