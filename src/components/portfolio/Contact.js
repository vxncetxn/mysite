import React from "react";
import styled from "styled-components";

const ContactContent = styled.div`
  position: absolute;
  left: 1140px;
  //   bottom: 30px;
  top: 425px;
  width: 250px;
  height: 250px;
  //   border: 5px solid blue;
  z-index: 1;

  & h1 + h1 {
    margin-top: -28px;
  }
`;

const Header = styled.h1`
  font-size: 7.6rem;
  font-family: "Fira Sans", sans-serif;
  font-weight: 900;
  font-style: italic;
  color: var(--color-primary-dark);
  //   border: 1px solid blue;
`;

const ContactList = styled.ul`
  //   margin-top: -10px;

  & li {
    text-align: right;
    // border: 1px solid red;
  }

  & li + li {
    margin-top: 2px;
  }

  & a {
    position: relative;
    padding-left: 20px;
    font-family: "Fira Sans", sans-serif;
    font-weight: 600;
    font-size: 20px;
    font-style: italic;
    text-decoration: none;
    text-transform: uppercase;
    color: var(--color-primary-dark);
    // border: 1px solid blue;
  }
`;

const ContactComp = () => {
  return (
    <ContactContent>
      <Header>Contact</Header>
      <Header style={{ textAlign: "right" }}>Me</Header>
      <ContactList>
        <li>
          <a
            href="https://www.linkedin.com/in/vance-tan-xr/"
            className="hvr-sweep-to-left"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/vxncetxn" className="hvr-sweep-to-left">
            Github
          </a>
        </li>
        <li>
          <a href="https://twitter.com/vxncetxn" className="hvr-sweep-to-left">
            Twitter
          </a>
        </li>
        <li>
          <a
            href="mailto:thevancetan@gmail.com?Subject=Hello%20there!"
            className="hvr-sweep-to-left"
          >
            Email
          </a>
        </li>
      </ContactList>
    </ContactContent>
  );
};

export default ContactComp;
