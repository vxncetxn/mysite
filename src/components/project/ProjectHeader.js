import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import DelayedLink from "../primitives/DelayedLink";
import image from "../../assets/sitedemo1-optim.png";

const ProjectHeader = styled.div`
  position: relative;
  background-image: url(${image});
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 700px;
  border-radius: 10px 0 0 10px;
  flex: 0 0 auto;
  clip-path: polygon(0 0, 88% 0, 100% 100%, 0% 100%);
  padding: 40px 130px 40px 50px;
  }
`;

const ColorFilter = styled.div`
  position: absolute;
  background-color: var(--color-primary-filter);
  top: 0;
  left: 0;
  height: 100%;
  width: 700px;
  border-radius: 10px 0 0 10px;
  clip-path: polygon(0 0, 88% 0, 100% 100%, 0% 100%);
`;

const ProjectNav = styled.nav`
  & ul {
    display: flex;
    justify-content: space-between;
  }
`;

const StyledLink = styled(Link)`
  position: relative;
  //   padding-right: 30px;
  font-family: var(--font-secondary);
  font-size: 2rem;
  font-weight: 300;
  color: var(--color-white);
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
`;

const ProjectTitle = styled.h1`
  position: relative;
  font-size: 5.2rem;
  font-family: var(--font-primary), sans-serif;
  font-weight: 900;
  margin-top: 300px;
  color: var(--color-white);
  //   border: 2px solid green;
`;

const WritingBadges = styled.ul`
  position: relative;
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

const ProjectHeaderComp = ({ setTransitionLeftActivated }) => {
  function pageTransitionLeft(setTransitionLeftActivated) {
    setTransitionLeftActivated(true);
    if (document.documentElement.scrollLeft) {
      document.documentElement.style.setProperty(
        "--transform-left",
        `translateX(calc(100vw + ${document.documentElement.scrollLeft}px))`
      );
    }
    document
      .querySelector(".project-layout-body")
      .classList.add("page-transition-to-left");
  }

  return (
    <ProjectHeader>
      <ColorFilter />
      <ProjectNav>
        <ul>
          <li>
            <DelayedLink
              to="/"
              delay={1200}
              uniqueID="project-delayed-link"
              clickEffect={pageTransitionLeft}
              clickEffectArgs={[setTransitionLeftActivated]}
              state={{
                previousLocation: !window.history.state
                  ? ["project"]
                  : window.history.state.previousLocation.concat(["project"])
              }}
              styles={`
                position: relative;
                font-family: var(--font-secondary);
                font-size: 2rem;
                font-weight: 300;
                color: var(--color-white);
                text-decoration: none;
                text-transform: uppercase;
                cursor: pointer;
              `}
            >
              Portfolio
            </DelayedLink>
          </li>
          <li>
            <StyledLink to="/">View All Projects</StyledLink>
          </li>
        </ul>
      </ProjectNav>
      <ProjectTitle>Projects and Work</ProjectTitle>
      <WritingBadges>
        <WritingBadge>Javascript</WritingBadge>
        <WritingBadge>Golang</WritingBadge>
        <WritingBadge>CSS</WritingBadge>
      </WritingBadges>
    </ProjectHeader>
  );
};

export default ProjectHeaderComp;
