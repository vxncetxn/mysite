import React from "react";
import styled from "styled-components";

const WritingTags = styled.ul`
  width: 300px;
  height: 200px;
  background-color: skyblue;
  //   border: 1px solid red;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 440px;
  right: 140px;
`;

const WritingTagsComp = () => {
  return <WritingTags />;
};

export default WritingTagsComp;
