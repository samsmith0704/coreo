import React from "react";

const DotSelect = ({ selectHandler }) => {
  return (
    <div>
      <select onChange={selectHandler} name="" id="">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>{" "}
    </div>
  );
};

export default DotSelect;
