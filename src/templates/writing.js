import React, { useState } from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import WritingMain from "../components/writing/WritingMain";
import Portfolio from "../components/portfolio/Portfolio";
import { useRandomize } from "../utils/useRandomize";

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        tags
        published
      }
      code {
        body
      }
    }
  }
`;

export default ({ data: { mdx: post } }) => {
  const [transitionUpActivated, setTransitionUpActivated] = useState(false);

  // useEffect(() => {
  //   // window.history.pushState(null, "", document.URL);
  //   window.addEventListener("popstate", function() {
  //     // const yScrollAmount = document.documentElement.scrollTop;
  //     // window.scrollTo({
  //     //   top: 0,
  //     //   left: 0,
  //     //   behavior: "smooth"
  //     // });
  //     setTimeout(() => {
  //       window.history.pushState(null, "", document.URL);
  //     }, 0);
  //     // window.history.pushState(null, "", document.URL);
  //     // setTimeout(() => {
  //     //   document.querySelector(".writing-visible-link").click();
  //     // }, 500);

  //     console.log(window.location);
  //   });
  // }, []);

  useRandomize();

  return (
    <Layout className="writing-layout-body">
      {transitionUpActivated ? <Portfolio decorative={"fromWriting"} /> : null}
      <WritingMain
        decorative={false}
        setTransitionUpActivated={setTransitionUpActivated}
      />
    </Layout>
  );
};
