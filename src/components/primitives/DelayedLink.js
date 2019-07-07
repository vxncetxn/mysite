import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledLink = styled(Link)`
  ${props => props.styles}
`;

const HiddenLink = styled(Link)`
  visibility: hidden;
`;

const DelayedLink = ({
  children,
  className,
  to,
  delay = 0,
  uniqueID,
  clickEffect = () => {},
  clickEffectArgs,
  state,
  styles = ""
}) => {
  const onClick = e => {
    e.preventDefault();
    clickEffect(...clickEffectArgs);
    setTimeout(() => {
      document.querySelector(`.${uniqueID}`).click();
    }, delay);
  };

  return (
    <>
      <StyledLink
        className={className}
        to={to}
        onClick={onClick}
        styles={styles}
      >
        {children}
      </StyledLink>
      <HiddenLink className={uniqueID} to={to} state={state} />
    </>
  );
};

export default DelayedLink;
