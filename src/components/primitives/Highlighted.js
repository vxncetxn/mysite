import React from "react";
import styled from "styled-components";

const Highlighted = styled.span`
  border-radius: 5px;
  padding-left: 3px;
  background-color: var(--color-tertiary);
  // background-image: linear-gradient(
  //   -100deg,
  //   var(--color-tertiary-light),
  //   var(--color-tertiary) 100%,
  //   var(--color-tertiary-light)
  // );
`;

const HighlightedComp = ({ children }) => {
  return <Highlighted>{children}</Highlighted>;
};

export default HighlightedComp;
