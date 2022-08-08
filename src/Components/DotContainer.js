import React from "react";
import Dot from "./Dot";
const DotContainer = ({ dotNum }) => {
  const dotList = new Array(dotNum);
  dotList.fill(<Dot />);
  console.log(dotList);
  return (
    <div>
      {dotList.map((dot) => {
        return dot;
      })}
    </div>
  );
};

export default DotContainer;
