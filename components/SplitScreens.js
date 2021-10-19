import React from "react";

const SplitScreens = (props) => {
  return (
    <div
      className={`container px-3 ${props.background} ${props.background} mx-auto flex flex-col md:flex-row lg:flex-row items-center`}
    >
      {props.children}
    </div>
  );
};

export default SplitScreens;
