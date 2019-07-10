import React from "react";
import styled from "styled-components";

import WritingHeader from "./WritingHeader";
import WritingTags from "./WritingTags";
import WritingBody from "./WritingBody";
import WritingFooter from "./WritingFooter";

const WritingMain = styled.div`
  position: ${props => (props.decorative ? "absolute" : "relative")};
  width: calc(100% - 160px);
  background-color: var(--color-white);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin: 80px;
  // border: 10px solid blue;
`;

const TopShape = styled.div`
  position: absolute;
  left: 850px;
  top: -80px;
  width: 510px;
  height: 330px;
  background: var(--color-secondary);
  //   clip-path: polygon(0 0, 100% 0, 100% 92%, 20% 100%);
  clip-path: polygon(30% 0, 100% 0, 100% 75%, 10% 100%);
`;

// const BottomShape = styled.div``;

const WritingMainComp = ({
  post = {},
  decorative,
  setTransitionUpActivated
}) => {
  return (
    <WritingMain
      decorative={decorative}
      style={
        decorative
          ? { top: "0", transform: `translateY(${window.innerHeight}px)` }
          : null
      }
    >
      <TopShape />
      <WritingHeader
        frontmatter={post.frontmatter}
        setTransitionUpActivated={setTransitionUpActivated}
      />
      <WritingBody code={post.code} />
      <WritingTags />
      <WritingFooter />
    </WritingMain>
  );
};

export default WritingMainComp;
