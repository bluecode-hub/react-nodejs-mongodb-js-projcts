function Button() {
  const handleClick = (e) => {
    e.target.textContent = "OUCH!";
  };

  const handleClickBack = (e) => {
    e.target.textContent = "Click me";
  };

  return (
    <>
      <button
        onClick={handleClick}
        onDoubleClick={handleClickBack}
      >
        Click me
      </button>
    </>
  );
}

export default Button;

