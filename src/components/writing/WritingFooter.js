import React from "react";
import styled from "styled-components";

const WritingFooter = styled.footer`
  //   position: absolute;
  //   bottom: 0;
  //   width: 100%;
  height: 380px;
  background-color: var(--color-secondary);
  clip-path: polygon(0 12%, 100% 0, 100% 100%, 0% 100%);
  border-radius: 0 0 10px 10px;
  padding: 80px 140px;
`;

const WritingFooterComp = () => {
  return <WritingFooter />;
};

export default WritingFooterComp;
