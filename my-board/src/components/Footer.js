import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  background: #48bec7;
  position: absolute;
  bottom: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Ptag = styled.p`
  text-align: center;
`;

function Footer() {
  return (
    <FooterDiv>
      <Ptag>copyright </Ptag>
    </FooterDiv>
  );
}

export default Footer;
