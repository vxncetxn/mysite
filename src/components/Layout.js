import React, { useEffect } from "react";
import styled from "styled-components";
import { window } from "browser-monads";

import Defaults from "./Defaults";

const LayoutBody = styled.div`
  // border: 5px solid green;
  transition: transform 1s cubic-bezier(0.6, -0.28, 0.735, 0.045);
`;

const Layout = ({ children, className }) => {
  useEffect(() => {
    if (!window.history.state) {
      window.history.replaceState({ previousLocation: [] }, document.title);
    }
    window.addEventListener("beforeunload", () => {
      window.history.replaceState({ previousLocation: [] }, document.title);
    });
  }, []);

  return (
    <>
      <Defaults />
      <LayoutBody className={className}>{children}</LayoutBody>
    </>
  );
};

export default Layout;
