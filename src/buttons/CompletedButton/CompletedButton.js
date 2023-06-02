import React from "react";
import icon2 from "./icon2.png";
import "./completedbtn.css";
const CompletedButton = ({ handleDoneBtnClick, index }) => {
  return (
    <img
      title="completed"
      src={icon2}
      onClick={() => handleDoneBtnClick(index)}
      alt="icon"
    />
  );
};

export default CompletedButton;
