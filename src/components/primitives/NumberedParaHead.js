import React from "react";
import styled from "styled-components";
import ParaHead from "./ParaHead";

const NumberedParaHead = styled(ParaHead)`
  ::before {
    content: "01";
    display: inline-block;
    border-bottom: 5px solid var(--color-primary-dark);
    font-size: 2.4rem;
    margin-right: 4rem;
    transform: translateY(-11px);
    text-indent: 12px;
  }
`;

const NumberedParaHeadComp = ({ children }) => {
  return <NumberedParaHead>{children}</NumberedParaHead>;
};

export default NumberedParaHeadComp;
