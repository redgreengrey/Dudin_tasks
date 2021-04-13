import React, { useState } from "react";
import "./index.scss";

const ControlsItem = ({ label, color, hoverColor, onClick }) => {
  const [hover, setHover] = useState(false);

  const style = {
    normal: {
      backgroundColor: color,
    },
    hover: {
      backgroundColor: hoverColor,
    },
  };

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <div className="controls-item">
      <button
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          ...style.normal,
          ...(hover ? style.hover : null),
        }}
        className="btn"
      >
        {label}
      </button>
    </div>
  );
};

export default ControlsItem;
