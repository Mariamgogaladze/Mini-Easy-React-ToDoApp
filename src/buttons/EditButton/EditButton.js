import React from "react";
import editedIcon from "./icon.png";

const EditButton = ({ handleEditBtnClick, index }) => {
  return (
    <img
      onClick={() => handleEditBtnClick(index)}
      title="edit"
      className="editedicon"
      src={editedIcon}
      alt="icon"
    />
  );
};

export default EditButton;
