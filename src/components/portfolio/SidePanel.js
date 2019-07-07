import React from "react";
import styled from "styled-components";

import Navbar from "./Navbar";

const SidePanel = styled.aside`
  position: absolute;
  left: 35px;
  top: 130px;
  //   width: 300px;
  height: 360px;
  //   border: 5px solid blue;
  display: flex;
  flex-direction: column;

  font-family: var(--font-primary), sans-serif;
  text-transform: uppercase;
  color: var(--color-primary-dark);
`;

const HeaderMain = styled.h1`
  font-size: 16rem;
  font-weight: 900;
  font-style: italic;
  //   border: 3px solid orange;
`;

const HeaderSub = styled.h2`
  font-size: 9.2rem;
  font-weight: 900;
  font-style: italic;
  margin-top: -50px;
  //   border: 3px solid green;
`;

const SidePanelComp = ({ setTransitionDownActivated }) => {
  return (
    <SidePanel>
      <HeaderMain>Hello</HeaderMain>
      <HeaderSub>I'm Vance!</HeaderSub>
      <Navbar setTransitionDownActivated={setTransitionDownActivated} />
    </SidePanel>
  );
};

export default SidePanelComp;
