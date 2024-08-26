import { useState } from "react";
import "./Toggle.css";

// Define the types for your props
interface ToggleProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
}

export const Toggle: React.FC<ToggleProps> = ({ handleChange, isChecked }) => {
  return (
    <div className="toggle-container">
      <input type="checkbox" id="check" className="toggle" onChange={handleChange} checked={isChecked} />
      <label htmlFor="check">Dark Mode</label>
    </div>
  );
};
