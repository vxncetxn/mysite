import React from "react";
import styled from "styled-components";

import DelayedLink from "../primitives/DelayedLink";

const Main = styled.main`
  position: absolute;
  left: 120px;
  top: 60px;
  width: 1200px;
  height: 600px;
  // clip-path: polygon(85% 0, 100% 21%, 95% 96%, 8% 100%, 8% 10%);
  clip-path: var(--clip-main);
  background-color: var(--color-primary);
  //   z-index: -1;
  //   border: 5px solid green;
`;

const MainContent = styled.div`
  position: absolute;
  left: 36%;
  top: 15%;
  width: 560px;
  height: 430px;
  //   border: 5px solid red;
  font-family: var(--font-secondary), sans-serif;
  overflow: scroll;

  & section + section {
    margin-top: 32px;
  }
`;

const ContentSection = styled.section`
  font-weight: 300;
  font-size: 3.2rem;
  line-height: 1.6;
  //   margin-bottom: 30px;
  color: var(--color-white);

  & h1 {
    font-weight: 300;
    font-size: 3.2rem;
    line-height: 0.6;
    margin-bottom: 24px;
    display: inline-block;
    border-bottom: 8px solid var(--color-primary-dark);
  }

  & a {
    color: var(--color-white);
    text-decoration: none;
    display: inline-block;
    line-height: 0.6;
    border-bottom: 8px solid var(--color-tertiary);
    cursor: pointer;

    &:hover {
      background-color: var(--color-tertiary);
    }
  }

  & > ul > li + li {
    margin-top: 18px;
  }

  & > ul p {
    font-size: 2.4rem;
    color: var(--primary-gray);
  }
`;

const linkStyles = `
  color: var(--color-white);
  text-decoration: none;
  display: inline-block;
  line-height: 0.6;
  border-bottom: 8px solid var(--color-tertiary);
  cursor: pointer;

  &:hover {
    background-color: var(--color-tertiary);
  }
`;

// const StyledLink = styled(Link)`
//   ${linkStyles}
// `;

const MainComp = ({ setTransitionRightActivated }) => {
  function pageTransitionRight(e) {
    setTransitionRightActivated(true);
    document
      .querySelector(".portfolio-layout-body")
      .classList.add("page-transition-to-right");
  }

  return (
    <Main id="main">
      <MainContent>
        <ContentSection id="about-me">
          <h1>About Me</h1>
          <p>
            I am an aspiring <a href="/">full-stack web developer</a>,
            interested in creating beautiful and innovative web experiences. I
            also dabble in <a href="/">3D graphics</a>, mixed reality and data
            visualisations. Feel free to <a href="/">chat me up!</a>
          </p>
        </ContentSection>
        <ContentSection id="projects">
          <h1>Projects</h1>
          <ul>
            <li>
              <DelayedLink
                to="/projects/shakespeare"
                delay={1200}
                uniqueID="portfolio-main-genart-delayed-link"
                clickEffect={pageTransitionRight}
                clickEffectArgs={[setTransitionRightActivated]}
                state={{
                  previousLocation: !window.history.state
                    ? ["portfolio"]
                    : window.history.state.previousLocation.concat([
                        "portfolio"
                      ])
                }}
                styles={linkStyles}
              >
                Gen Art
              </DelayedLink>
              <p>A site showcasing some of my generative art</p>
            </li>
            <li>
              <DelayedLink
                to="/projects/shakespeare"
                delay={1200}
                uniqueID="portfolio-main-toolsio-delayed-link"
                clickEffect={pageTransitionRight}
                clickEffectArgs={[setTransitionRightActivated]}
                state={{
                  previousLocation: !window.history.state
                    ? ["portfolio"]
                    : window.history.state.previousLocation.concat([
                        "portfolio"
                      ])
                }}
                styles={linkStyles}
              >
                Tool.io
              </DelayedLink>
              <p>Handy web-based tools created to practise my webdev skills</p>
            </li>
            <li>
              <DelayedLink
                to="/projects/shakespeare"
                delay={1200}
                uniqueID="portfolio-main-exampledev-delayed-link"
                clickEffect={pageTransitionRight}
                clickEffectArgs={[setTransitionRightActivated]}
                state={{
                  previousLocation: !window.history.state
                    ? ["portfolio"]
                    : window.history.state.previousLocation.concat([
                        "portfolio"
                      ])
                }}
                styles={linkStyles}
              >
                Example.dev
              </DelayedLink>
              <p>An example to fill up some space here first</p>
            </li>
            <li>
              <DelayedLink
                to="/projects/main"
                delay={1200}
                uniqueID="portfolio-main-completeprojects-delayed-link"
                clickEffect={pageTransitionRight}
                clickEffectArgs={[setTransitionRightActivated]}
                state={{
                  previousLocation: !window.history.state
                    ? ["portfolio"]
                    : window.history.state.previousLocation.concat([
                        "portfolio"
                      ])
                }}
                styles={linkStyles}
              >
                View complete project list &rarr;
              </DelayedLink>
            </li>
          </ul>
        </ContentSection>
      </MainContent>
    </Main>
  );
};

export default MainComp;
