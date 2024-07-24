import React from "react";

function Figure({ value, onClick }) {
  return (
    <div className="figure" onClick={onClick}>
      <p>{value}</p>
    </div>
  );
}

export default Figure;
