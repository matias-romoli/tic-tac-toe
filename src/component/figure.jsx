import React from "react";

<<<<<<< HEAD
function Figure({ value, onClick, disabled }) {
  return (
    <button
      className={value === "X" ? "figure" : "figure2"}
      onClick={onClick}
      disabled={disabled}
    >
      <p>{value}</p>
    </button>
=======
function Figure({ value, onClick }) {
  return (
    <div className="figure" onClick={onClick}>
      <p>{value}</p>
    </div>
>>>>>>> 29270817cf1747777ef5d8aa7ddd485a621f3931
  );
}

export default Figure;
