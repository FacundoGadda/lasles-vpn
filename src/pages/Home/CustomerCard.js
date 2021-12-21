import React from "react";
import { AiFillStar } from "react-icons/ai";

const CustomerCard = ({ customer, country, text, img }) => {
  return (
    <div className="container">
      <div
        className="bg-white border hov customer-card p-4 d-flex flex-column"
        style={{ height: 230 }}
      >
        <div className="d-flex align-items-center">
          <div>
            <img src={img} alt="profile-pic" className="img-fluid" />
          </div>
          <div className="ms-3">
            <h4 className="lh-1">{customer}</h4>
            <p className="fs-14 text-muted lh-1 mb-0">{country}</p>
          </div>
          <div className="ms-auto d-flex align-items-center">
            <p className="mb-0">4.5</p>
            <AiFillStar className="ms-2" color="orange" />
          </div>
        </div>
        <div className="mt-3">
          <p className="mb-0" style={{ lineHeight: "30px" }}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
