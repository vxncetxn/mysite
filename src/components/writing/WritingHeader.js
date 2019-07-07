import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import DelayedLink from "../primitives/DelayedLink";

const WritingHeader = styled.header`
  height: 380px;
  padding: 40px 140px;
  padding-bottom: 10px;
  //   border: 2px solid red;
  clip-path: polygon(0 0, 100% 0, 100% 88%, 0% 100%);
  background-color: var(--color-primary);
  border-radius: 10px 10px 0 0;
`;

const WritingNav = styled.nav`
  //   margin: 10rem 10rem;

  & ul {
    display: flex;
    justify-content: space-between;
  }
`;

const WritingTitle = styled.h1`
  font-size: 5.2rem;
  font-family: var(--font-primary), sans-serif;
  font-weight: 900;
  margin-top: 85px;
  color: var(--color-white);
  //   border: 2px solid green;
`;

const WritingBadges = styled.ul`
  display: flex;
  margin-top: 30px;
`;

const WritingBadge = styled.span`
  display: inline-block;
  font-size: 2rem;
  font-family: var(--font-secondary), sans-serif;
  color: var(--color-white);
  margin-right: 20px;
  border: 2px solid var(--color-white);
  padding: 6px 10px;
  border-radius: 50px;
  min-width: 100px;
  text-align: center;
`;

const StyledLink = styled(Link)`
  position: relative;
  font-family: var(--font-secondary);
  font-size: 2rem;
  font-weight: 300;
  color: var(--color-gray);
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
`;

const WritingHeaderComp = ({ setTransitionUpActivated }) => {
  function pageTransitionUp(setTransitionUpActivated) {
    setTransitionUpActivated(true);
    if (document.documentElement.scrollTop) {
      document.documentElement.style.setProperty(
        "--transform-up",
        `translateY(calc(100vh + ${document.documentElement.scrollTop}px))`
      );
    }
    document
      .querySelector(".writing-layout-body")
      .classList.add("page-transition-to-up");
  }

  return (
    <WritingHeader>
      <WritingNav>
        <ul>
          <li>
            <DelayedLink
              to="/"
              delay={1200}
              uniqueID="writing-delayed-link"
              clickEffect={pageTransitionUp}
              clickEffectArgs={[setTransitionUpActivated]}
              state={{
                previousLocation: !window.history.state
                  ? ["writing"]
                  : window.history.state.previousLocation.concat(["writing"])
              }}
              styles={`
                position: relative;
                //   padding-right: 30px;
                font-family: var(--font-secondary);
                font-size: 2rem;
                font-weight: 300;
                color: var(--color-gray);
                text-decoration: none;
                text-transform: uppercase;
                cursor: pointer;
              `}
            >
              Portfolio
            </DelayedLink>
          </li>
          <li>
            <StyledLink to="/">View All Articles</StyledLink>
          </li>
        </ul>
      </WritingNav>
      <WritingTitle>Writing and Articles</WritingTitle>
      <WritingBadges>
        {/* <WritingBadge>26 articles in total</WritingBadge> */}
        <WritingBadge>Published 5 May 2019</WritingBadge>
        <WritingBadge>Javascript</WritingBadge>
        <WritingBadge>Golang</WritingBadge>
        <WritingBadge>CSS</WritingBadge>
      </WritingBadges>
    </WritingHeader>
  );
};

export default WritingHeaderComp;