import React from "react";
import styled from "styled-components";
import Prism from "prismjs";
import "../../../static/styles/prism.css";

const Pre = styled.pre`
  margin: 0 100px;
  background-color: var(--color-primary-darker);
  border-radius: 10px;
  padding: 30px 40px;
  overflow-x: scroll;
`;

const CodePara = ({ children }) => {
  const highlighted = Prism.highlight(children, Prism.languages["javascript"]);

  return (
    <Pre>
      <code
        style={{ fontSize: "2rem" }}
        className="language-javascript"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
    </Pre>
  );
};

export default CodePara;
