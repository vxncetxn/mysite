import React from "react";
import styled from "styled-components";
import { window, document } from "../../utils/browserMonads";

import DelayedLink from "../primitives/DelayedLink";

const Navbar = styled.nav`
  height: 20px;
  z-index: 1;
  //   border: 5px solid blue;

  & > ul > li + li {
  }

  & button {
    position: relative;
    padding-right: 30px;
    font-family: var(--font-primary);
    font-size: 4.2rem;
    font-style: italic;
    text-transform: uppercase;
    color: var(--color-primary-dark);
    border: none;
    background: none;
    cursor: pointer;
  }
`;

// const StyledLink = styled(Link)`
//   position: relative;
//   padding-right: 30px;
//   font-family: var(--font-primary);
//   font-size: 4.2rem;
//   font-style: italic;
//   color: var(--color-primary-dark);
//   text-decoration: none;
//   cursor: pointer;
// `;

const NavbarComp = ({ setTransitionDownActivated }) => {
  function pageTransitionDown() {
    // window.history.replaceState(
    //   {
    //     previousLocation: window.history.state.previousLocation.concat(
    //       "portfolio"
    //     )
    //   },
    //   document.title
    // );
    setTransitionDownActivated(true);
    if (document.documentElement.scrollTop) {
      document.documentElement.style.setProperty(
        "--transform-down",
        `translateY(calc(-100vh + ${document.documentElement.scrollTop}px))`
      );
    }
    document
      .querySelector(".portfolio-layout-body")
      .classList.add("page-transition-to-down");
  }

  return (
    <Navbar>
      <ul>
        <li>
          <button
            className="hvr-sweep-to-right"
            onClick={() =>
              document
                .getElementById("about-me")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            About Me
          </button>
        </li>
        <li>
          <button
            className="hvr-sweep-to-right"
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Projects
          </button>
        </li>

        <li>
          <DelayedLink
            className="hvr-sweep-to-right"
            to="/writing/main"
            delay={1200}
            uniqueID="portfolio-nav-delayed-link"
            clickEffect={pageTransitionDown}
            state={{
              previousLocation: !window.history.state
                ? ["portfolio"]
                : window.history.state.previousLocation.concat(["portfolio"])
            }}
            // state={{ ...window.history.state }}
            styles={`
                position: relative;
                padding-right: 30px;
                font-family: var(--font-primary);
                font-size: 4.2rem;
                font-style: italic;
                color: var(--color-primary-dark);
                text-decoration: none;
                cursor: pointer;
              `}
          >
            Writing
          </DelayedLink>
        </li>
      </ul>
    </Navbar>
  );
};

export default NavbarComp;
