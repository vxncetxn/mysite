import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-mdx";

const WritingBody = styled.main`
  min-height: 500px;
  margin: 60px 0;
  padding: 0 140px;

  & p > br + a,
  & h2 + p {
    margin-top: 40px;
  }

  & p + h2,
  & p + p,
  & p + div,
  & pre + p,
  & p + pre {
    margin-top: 60px;
  }

  & .intropara-writing {
    width: 600px;
  }

  & .defaultpara-writing {
    margin-left: 100px;
    margin-right: 100px;
  }
`;

const WritingBodyComp = ({ code = false }) => {
  let relevant;
  if (!code) {
    relevant = useStaticQuery(graphql`
      query {
        mdx(frontmatter: { slug: { eq: "writing/main" } }) {
          code {
            body
          }
        }
      }
    `).mdx.code.body;
  } else {
    relevant = code.body;
  }
  return (
    <WritingBody>
      <MDXRenderer>{relevant}</MDXRenderer>
    </WritingBody>
  );
};

export default WritingBodyComp;
