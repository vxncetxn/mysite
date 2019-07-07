import React from "react";
import styled from "styled-components";

const ContactBlock = styled.div`
  position: relative;
  left: 1030px;
  top: 380px;
  width: 410px;
  height: 330px;
  background: var(--color-secondary);
  // clip-path: polygon(20% 0%, 100% 8%, 100% 100%, 0 100%);
  // clip-path: polygon(36% 0, 100% 15%, 100% 100%, 12% 100%);
  clip-path: var(--clip-contact);
  z-index: -2;
`;

const ContactBlockComp = () => {
  return <ContactBlock id="contact"></ContactBlock>;
};

export default ContactBlockComp;
