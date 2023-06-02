import React from "react";
import "./firstinput.css";

const FirstInput = ({ inputValue, handleInputChange }) => {
  return (
    <input
      className="inputField"
      type="text"
      name="inputField"
      placeholder="Dream, Plan, Do!"
      required
      value={inputValue}
      onChange={(e) => handleInputChange(e)}
    />
  );
};

export default FirstInput;
