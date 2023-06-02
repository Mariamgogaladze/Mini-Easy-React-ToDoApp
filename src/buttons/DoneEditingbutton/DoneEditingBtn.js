import React from "react";
import doneEditing from "./icon5.png";

const DoneEditingBtn = ({ handleEditDoneClick, index }) => {
  return (
    <img
      src={doneEditing}
      alt="icon"
      title="Done editing"
      className="doneEditBtn"
      onClick={() => handleEditDoneClick(index)}
    />
  );
};

export default DoneEditingBtn;
