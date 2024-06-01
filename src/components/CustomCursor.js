import React from "react";
import "./CustomCursor.css"; // Import CSS file for styling

const CustomCursor = ({ x, y }) => {
  return (
    <div className="custom-cursor" style={{ top: `${y}px`, left: `${x}px` }}>
      Coming Soon
    </div>
  );
};

export default CustomCursor;
