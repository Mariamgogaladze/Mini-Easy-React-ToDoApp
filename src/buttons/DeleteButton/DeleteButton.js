import React from "react";
import icon3 from "./icon3.png";

const DeleteButton = ({ handleDeleteBtnClick, index }) => {
  return (
    <img
      src={icon3}
      alt="delete icon"
      title="Delete"
      onClick={() => handleDeleteBtnClick(index)}
      className="deleteBtn"
    />
  );
};

export default DeleteButton;
