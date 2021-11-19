import React from "react";
import './button.scss';

const Button = ({ text, styles, icon }) => {
  return <button className={styles}>{text || icon}</button>;
};

export default Button;
