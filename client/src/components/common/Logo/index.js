import React from "react";
import styled from "styled-components";
import CatwikiLogo from "../../../assets/images/CatwikiLogo.svg";
import { Margin } from "../../../globalStyle";

const Style = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 1rem;
  ${Margin}

  img {
    max-width: 10rem;
  }
`;

const Logo = () => {
  return (
    <Style>
      <img src={CatwikiLogo} alt="Logo" />
    </Style>
  );
};

export default Logo;
