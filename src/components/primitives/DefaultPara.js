import React from "react";
import styled from "styled-components";

const DefaultPara = styled.p`
  font-size: ${props => props.extend.fontSize || "2.4rem"};
  font-family: var(--font-secondary), sans-serif;
  font-weight: 400;
  color: var(--color-primary-dark);
  line-height: 2.4;

  & > .initial-letter {
    font-size: 6rem;
    font-weight: 600;
    line-height: 0;
  }
`;

const DefaultParaComp = ({ children, className, extend = {} }) => {
  return (
    <DefaultPara className={className} extend={extend}>
      {children}
    </DefaultPara>
  );
};

export default DefaultParaComp;
