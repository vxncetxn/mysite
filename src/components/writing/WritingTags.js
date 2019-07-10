import React from "react";
import styled from "styled-components";
// import {useStaticQuery, graphql} from "gatsby";

import Anchor from "../primitives/Anchor";

const WritingTags = styled.ul`
  width: 250px;
  height: 200px;
  // background-color: skyblue;
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 457px;
  right: 140px;

  & > li + li {
    margin-top: 15px;
  }

  & > li {
    font-size: 3rem;
    font-family: var(--font-secondary), sans-serif;
    color: var(--color-primary-dark);
  }
`;

const Hash = styled.span`
  color: var(--color-primary);
  font-family: var(--font-primary);
  font-weight: 600;
`;

const WritingTagsComp = () => {
  return (
    <WritingTags>
      {/* <li>Tags: </li> */}
      <li>
        <Hash># </Hash>
        <Anchor type="internal" dest="/" extend={{ fontSize: "3rem" }}>
          Javascript (5)
        </Anchor>
      </li>
      <li>
        <Hash># </Hash>
        <Anchor type="internal" dest="/" extend={{ fontSize: "3rem" }}>
          Markup (2)
        </Anchor>
      </li>
      <li>
        <Hash># </Hash>
        <Anchor type="internal" dest="/" extend={{ fontSize: "3rem" }}>
          Golang (12)
        </Anchor>
      </li>
    </WritingTags>
  );
};

export default WritingTagsComp;
