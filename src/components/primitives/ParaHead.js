import React from "react";
import styled from "styled-components";

const ParaHead = styled.h2`
  font-size: 4.4rem;
  font-family: var(--font-primary), sans-serif;
  color: var(--color-primary-dark);
  font-weight: 900;
  margin-bottom: 20px;
  // border: 1px solid green;
  // width: 600px;

  ${props =>
    props.number
      ? `
    ::before {
      content: "${props.number}";
      display: inline-block;
      border-bottom: 5px solid var(--color-primary-dark);
      font-size: 2.4rem;
      margin-right: 4rem;
      transform: translateY(-11px);
      text-indent: 12px;
    }
  `
      : null}
`;

const ParaHeadComp = ({ children, number }) => {
  return <ParaHead number={number}>{children}</ParaHead>;
};

export default ParaHeadComp;
