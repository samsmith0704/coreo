import React from "react";

const dotStyle = {
  color: "blue",

  backgroundColor: "CornflowerBlue",
  borderRadius: "50%",
  border: "none",
  height: "25px",
  width: "25px",
  display: "inline-block",
};
const Dot = () => {
  return (
    <div>
      <button style={dotStyle} />
    </div>
  );
};

export default Dot;
