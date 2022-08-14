import React from "react";
import DotContainer from "./DotContainer";
import DotSelect from "./DotSelect";

const HighLevelContainer = () => {
  const [dotCount, setDotCount] = React.useState(0);
  const selectHandler = (e) => {
    setDotCount(e.target.value);
  };

  return (
    <div>
      <DotSelect selectHandler={selectHandler} />
      <DotContainer dotNum={dotCount} />
    </div>
  );
};

export default HighLevelContainer;
