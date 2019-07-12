import React from "react";
import styled from "styled-components";

const QuotePara = styled.p`
  // margin: 0 100px;
  padding: 5px 20px;
  font-size: 3rem;
  font-family: var(--font-secondary), sans-serif;
  font-weight: 400;
  font-style: italic;
  color: var(--color-primary-dark);
  border-left: 5px solid var(--color-primary);
`;

const QuoteParaComp = ({ children }) => {
  return <QuotePara>{children}</QuotePara>;
};

export default QuoteParaComp;
