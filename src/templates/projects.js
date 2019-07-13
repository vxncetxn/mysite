import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { window } from "../utils/browserMonads";

import Layout from "../components/Layout";
import ProjectMain from "../components/project/ProjectMain";
import Portfolio from "../components/portfolio/Portfolio";
import { useRandomize } from "../utils/useRandomize";

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        tags
      }
      code {
        body
      }
    }
  }
`;

export default ({ data: { mdx: post } }) => {
  console.log(post);
  const [transitionLeftActivated, setTransitionLeftActivated] = useState(false);

  useEffect(() => {
    function replaceVerticalScrollByHorizontal(e) {
      e.preventDefault();
      if (e.deltaY !== 0) {
        window.scroll(window.scrollX + e.deltaY * 5, 0);
      } else if (e.deltaX !== 0) {
        window.scroll(window.scrollX + e.deltaX * 3, 0);
      }
    }
    window.addEventListener("wheel", replaceVerticalScrollByHorizontal);
    return () =>
      window.removeEventListener("wheel", replaceVerticalScrollByHorizontal);
  });

  useRandomize();

  return (
    <Layout className="project-layout-body" style={{ paddingRight: "80px" }}>
      {transitionLeftActivated ? <Portfolio decorative="fromProject" /> : null}
      <ProjectMain
        post={post}
        setTransitionLeftActivated={setTransitionLeftActivated}
      />
    </Layout>
  );
};
