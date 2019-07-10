import React from "react";
import styled from "styled-components";

import NumberedParaHead from "../primitives/NumberedParaHead";
import DefaultPara from "../primitives/DefaultPara";

const ProjectBody = styled.div`
  height: 100%;
  // width: 150vw;
  // border: 2px solid red;
  flex: 0 0 auto;
  font-size: 2.4rem;
  font-family: var(--font-secondary), sans-serif;
  color: var(--color-primary-dark);
  font-weight: 400;
  padding: 40px 50px 40px 70px;
  display: flex;

  & > * + * {
    margin-left: 60px;
    // border: 1px solid green;
  }

  & img {
    height: 100%;
    // border: 1px solid red;
    border: 10px solid var(--color-primary);
  }

  & > div {
    // border: 1px solid green;
  }
`;

const ProjectDefaultPara = styled(DefaultPara)`
  width: 600px;
`;

const ProjectBodyComp = () => {
  return (
    <ProjectBody>
      <div>
        <NumberedParaHead>
          Responsive and modern ticketing system
        </NumberedParaHead>
        <ProjectDefaultPara>
          Recently, I found Steve on Twitter and saw how he was sharing design
          tips targeted at developers with no design background, I followed him
          in the blink of an eye. I'm not exaggerating when I say that he was
          one of my best follows in 2018. This is really incredible and thus I
          would like to share it with all of you. trust me when I say that this
          will change the world.
        </ProjectDefaultPara>
      </div>
      <img src={require("../../assets/trial1.png")} alt="picz" />
      <img src={require("../../assets/archiviz6.png")} alt="picz2" />
      {/* <div>
        <DefaultPara>
          I remember the day I asked him to make a book out of all the tips he’d
          been sharing. I told him I’d give him my money in a heart beat. A book
          that contained all the useful tips he was sharing, the way he was
          sharing them, would have been a box full of gems.
        </DefaultPara>
      </div> */}
    </ProjectBody>
  );
};

export default ProjectBodyComp;
