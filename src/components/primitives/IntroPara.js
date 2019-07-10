import React from "react";
import styled from "styled-components";

const IntroPara = styled.p`
  width: 600px;
  font-size: 3rem;
  font-family: var(--font-secondary), sans-serif;
  font-weight: 400;
  color: var(--color-primary-dark);
  line-height: 2;

  & > .initial-letter {
    font-size: 6rem;
    font-weight: 600;
    line-height: 0;
  }
`;

const IntroParaComp = ({ children }) => {
  return <IntroPara>{children}</IntroPara>;
};

export default IntroParaComp;
