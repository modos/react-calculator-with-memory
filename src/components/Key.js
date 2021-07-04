const Key = ({ onClick, text, wide, blue, res }) => {
  return (
    <button
      onClick={onClick}
      className={["key", wide && "wide", blue && "blue", res && "res"].join(" ")}
    >
      {text}
    </button>
  );
};

export default Key;
