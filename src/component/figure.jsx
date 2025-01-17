import React from "react";

function Figure({ value, onClick, disabled }) {
  return (
    <button
      className={value === "X" ? "figure" : "figure2"}
      onClick={onClick}
      disabled={disabled}
    >
      <p>{value}</p>
    </button>
  );
}

export default Figure;
