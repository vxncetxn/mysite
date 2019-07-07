import React from "react";
import styled from "styled-components";

import SidePanel from "./SidePanel";
import Main from "./Main";
import Contact from "./Contact";
import ContactBlock from "./ContactBlock";

const Portfolio = styled.div`
  margin-bottom: -330px;
`;

const PortfolioComp = ({
  decorative,
  setTransitionDownActivated,
  setTransitionRightActivated
}) => {
  return (
    <Portfolio
      style={
        decorative === "fromWriting"
          ? { transform: `translateY(-${window.innerHeight}px)` }
          : decorative === "fromProject"
          ? { transform: `translateX(-${window.innerWidth}px)` }
          : null
      }
    >
      <ContactBlock />
      <Main setTransitionRightActivated={setTransitionRightActivated} />
      <SidePanel setTransitionDownActivated={setTransitionDownActivated} />
      <Contact />
    </Portfolio>
  );
};

export default PortfolioComp;
