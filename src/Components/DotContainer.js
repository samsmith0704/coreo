import React from "react";
import Dot from "./Dot";
const DotContainer = ({ dotNum }) => {
  const dotList = new Array(dotNum);

  for (let i = dotNum - 1; i--; i === 0) {
    dotList[i] = <Dot />;
  }
  return (
    <div>
      {dotList.map((dot) => {
        return dot;
      })}
    </div>
  );
};

export default DotContainer;
