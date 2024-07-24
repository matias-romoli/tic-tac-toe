function Button({ value, isSelected, onClick, disabled }) {
  return (
    <button
      className={isSelected ? "" : "not-selected"}
      disabled={disabled}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Button;
