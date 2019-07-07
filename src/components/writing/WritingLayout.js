import React from "react";

import Defaults from "../Defaults";

const WritingLayout = ({ children }) => {
  return (
    <>
      <Defaults />
      <>{children}</>
    </>
  );
};

export default WritingLayout;
