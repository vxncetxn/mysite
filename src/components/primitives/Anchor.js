import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { window } from "browser-monads";

const ExternalAnchor = styled.a`
  font-size: ${props => props.extend.fontSize || "2.4rem"};
  font-family: var(--font-secondary), sans-serif;
  color: var(--color-primary-dark);
  text-decoration: none;
  display: inline-block;
  line-height: 0.6;
  border-bottom: 8px solid var(--color-tertiary);
  cursor: pointer;

  &:hover {
    background-color: var(--color-tertiary);
  }
`;

const InternalAnchor = styled(Link)`
  font-size: ${props => props.extend.fontSize || "2.4rem"};
  font-family: var(--font-secondary), sans-serif;
  color: var(--color-primary-dark);
  text-decoration: none;
  display: inline-block;
  line-height: 0.6;
  border-bottom: 8px solid var(--color-tertiary);
  cursor: pointer;

  &:hover {
    background-color: var(--color-tertiary);
  }
`;

const AnchorComp = ({
  children,
  className,
  extend = {},
  type = "external",
  dest
}) => {
  return type === "internal" ? (
    <InternalAnchor
      className={className}
      extend={extend}
      to={dest}
      state={{
        previousLocation: !window.history.state
          ? ["link"]
          : window.history.state.previousLocation.concat(["link"])
      }}
    >
      {children}
    </InternalAnchor>
  ) : (
    <ExternalAnchor className={className} extend={extend} href={dest}>
      {children}
    </ExternalAnchor>
  );
};

export default AnchorComp;
