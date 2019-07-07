import React from "react";
import styled from "styled-components";

import CodePara from "../CodePara";

const WritingBody = styled.main`
  min-height: 500px;
  margin: 60px 0;
  // padding: 0 190px;
  padding: 0 140px;
  font-size: 2.4rem;
  font-family: var(--font-secondary), sans-serif;
  color: var(--color-primary-dark);
  font-weight: 400;

  & > p + p,
  & > p + pre,
  & > pre + p {
    margin-top: 40px;
  }

  & a {
    color: var(--color-primary-dark);
    text-decoration: none;
    display: inline-block;
    line-height: 0.6;
    border-bottom: 8px solid var(--color-tertiary);
    cursor: pointer;

    &:hover {
      background-color: var(--color-tertiary);
    }
  }
`;

const IntroPara = styled.p`
  // display: inline-block;
  width: 600px;
  font-size: 3rem;
  line-height: 2;
  // border: 1px solid green;

  & > .initial-letter {
    font-size: 6rem;
    font-weight: 600;
    line-height: 0;
    // color: var(--color-primary);
  }
`;

const DefaultPara = styled.p`
  margin: 0 100px;
  line-height: 2.4;
`;

const QuotePara = styled.p`
  margin: 0 100px;
  padding: 5px 20px;
  font-size: 3rem;
  font-style: italic;
  border-left: 5px solid var(--color-primary);
`;

const WritingBodyComp = () => {
  return (
    <WritingBody>
      <IntroPara>
        <span className="initial-letter">R</span>ecently, I found{" "}
        <a href="/" className="text-highlight">
          Steve on Twitter
        </a>{" "}
        and saw how he was sharing design tips targeted at developers with no
        design background, I followed him in the blink of an eye. I'm not
        exaggerating when I say that he was one of my best follows in 2018. A
        book that contained all the useful tips he was sharing, the way he was
        sharing them, would have been a box full of gems.
      </IntroPara>
      <QuotePara>
        This is a remarkable quote from the text that I found that I really
        hoped to share with you guys.
      </QuotePara>
      <DefaultPara>
        I remember the day I asked him to make a{" "}
        <a href="/" className="text-highlight">
          book
        </a>{" "}
        out of all the tips he’d been sharing. I told him I’d give him my money
        in a heart beat. A book that contained all the useful tips he was
        sharing, the way he was sharing them, would have been a box full of
        gems.
      </DefaultPara>
      <DefaultPara>
        Just like his{" "}
        <a href="/" className="text-highlight">
          tweets
        </a>
        , the book is chock full of design tips — brief, short tips written very
        well, straight to the point, and accompanied with visual representations
        of how to apply them and how not to. One tip is followed by another,
        without any extra talk or gibberish in between. Just my kind of content.
        Just my kind of book. As I was reading it, I couldn’t help but think
        that this is how I would write{" "}
        <a href="/" className="text-highlight">
          my own book
        </a>
        , which is why I enjoyed reading it so much. And I read it fast because,
        again, there was no long or unnecessary talk — just the tips distilled
        down and lots of pretty visual eye candy.
      </DefaultPara>
      <CodePara>
        {`onSubmit(e) {
  e.preventDefault();
  const job = {
    title: 'Developer',
    company: 'Facebook' 
  };
}

if (x > 6 || x === "Giant-long-string-of-unreadable-and-avoidable-text") {
  return true;
} else if (x === "hungry") {
  return "early";
} else {
  return null;
}
`}
      </CodePara>
    </WritingBody>
  );
};

export default WritingBodyComp;
