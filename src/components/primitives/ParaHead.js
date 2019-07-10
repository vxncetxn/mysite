import React from "react";
import styled from "styled-components";

const ParaHead = styled.h2`
  font-size: 4.4rem;
  font-family: var(--font-primary), sans-serif;
  color: var(--color-primary-dark);
  font-weight: 900;
  margin-bottom: 2rem;
  // border: 1px solid red;
  width: 600px;
`;

const ParaHeadComp = ({ children }) => {
  return <ParaHead>{children}</ParaHead>;
};

export default ParaHeadComp;
