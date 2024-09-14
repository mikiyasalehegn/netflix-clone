import React, { Children, useState } from "react";

function ToolTip({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => {
        setIsVisible(true);
      }}
      onMouseLeave={() => {
        setIsVisible(false);
      }}
    >
      {children}
      {isVisible && (
        <div className="tooltip">Click here to see the trailer</div>
      )}
    </div>
  );
}

export default ToolTip;
