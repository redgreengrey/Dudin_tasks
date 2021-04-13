import React from "react";
import "./index.scss";

const StatsItem = ({ label, color, width }) => {
  let style = {
    backgroundColor: color,
    width: `${width}%`,
  };

  return (
    <div className="stats-item">
      <div className="label">{label}:</div>
      <div className="scale-indicator">
        <div className="scale-indicator__inner" style={style}></div>
      </div>
    </div>
  );
};

export default StatsItem;
