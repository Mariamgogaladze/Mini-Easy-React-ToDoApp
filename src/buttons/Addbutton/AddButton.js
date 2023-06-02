import React from "react";
import "./addbutton.css";

const AddButton = ({ handleAddButtonClick }) => {
  return (
    <div>
      <button className="submitBtn" onClick={handleAddButtonClick}>
        Add
      </button>
    </div>
  );
};

export default AddButton;
