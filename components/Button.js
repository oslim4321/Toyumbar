import React from "react";

const Button = ({ text, buttonStyle }) => {
  return (
    <button
      className={`flex items-center justify-between  font-medium border-2 border-black py-3 px-6 ${buttonStyle} `}
    >
      <span className="mr-2">{text}</span>
      <span className="border-b border-black mr-2"></span>
      <i className="bi bi-arrow-up-right"></i>
    </button>
  );
};

export default Button;
