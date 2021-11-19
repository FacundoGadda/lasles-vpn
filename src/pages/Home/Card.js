import React from "react";
import box from "../../assets/Free.png";
import Button from "../../components/Button";
import { BsCheckLg } from "react-icons/bs";

const Card = ({ title, li, plan }) => {
  return (
    <div className="col-12 col-lg-3 bg-white border hov rounded-3 d-flex flex-column justify-content-between cards-2">
      <div className="mx-auto">
        <img src={box} alt="box" />
        <h4 className="text-center mt-5 mb-4">{title}</h4>
        <ul>
          {li.map((item, i) => (
            <li key={i} style={{ lineHeight: 2.5 }}>
              <BsCheckLg color="#2FAB73" size="15" className="me-4" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="d-flex flex-column align-items-center">
        <h3 className="mb-3">{plan}</h3>
        <Button
          styles="outlined-button"
          text="Select"
          className="text-center"
        />
      </div>
    </div>
  );
};

export default Card;
