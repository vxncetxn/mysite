import React from "react";
import styled from "styled-components";

import ProjectHeader from "./ProjectHeader";
import ProjectBody from "./ProjectBody";

const ProjectMain = styled.div`
  margin: 80px;
  background-color: var(--color-white);
  height: ${() => `calc(${window.innerHeight}px - 160px)`};
  width: auto;
  min-width: calc(100vw - 160px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: inline-flex;
`;

const ProjectMainComp = ({
  post = {},
  decorative,
  setTransitionLeftActivated
}) => {
  return (
    <ProjectMain
      style={
        decorative ? { transform: `translateX(${window.innerWidth}px)` } : null
      }
    >
      <ProjectHeader
        frontmatter={post.frontmatter}
        setTransitionLeftActivated={setTransitionLeftActivated}
      />
      <ProjectBody code={post.code} />
    </ProjectMain>
  );
};

export default ProjectMainComp;
