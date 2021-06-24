import React from "react";
import styled from "styled-components";

import headerLg from "../../../assets/images/HeroImagelg.png";
import CatwikiLogo from "../../../assets/images/CatwikiLogo.svg";
import { Margin, mediaScreen } from "../../../globalStyle";
import { Search } from "../../common";

const { sm } = mediaScreen();
const { Style, Wrapper, MostSearchBreedsStyle } = {
  MostSearchBreedsStyle: styled.div`
    padding: 1rem 3rem 1rem 3rem;

    > div:nth-child(1) {
      > div {
        background: var(--brown);
        width: 7%;
        height: 0.2rem;
      }
    }
    > div:nth-child(2) {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h1 {
        padding: 2rem 0 2rem 0;
        max-width: 30rem;
        font-size: 3rem;
      }
    }
  `,
  Wrapper: styled.div`
    height: 100vh;
    background: var(--gray-2);
    border-radius: var(--radius);

    > div:first-child {
      background-image: url(${headerLg});
      padding: 2rem 0 2rem 0;
      display: flex;
      flex-direction: column;
      justify-content: center;

      > div {
        padding: 0 3rem 0 3rem;

        ${sm(`
           padding: 0 1.5rem 0 1.5rem;
        `)}

        > div {
          display: grid;
          color: var(--light-2);
          max-width: 30rem;

          .heading {
            color: var(--light-1);
          }

          img {
            filter: invert(100%);
          }
        }
      }
    }
  `,
  Style: styled.div`
    ${Margin}
  `,
};

const MostSearchBreeds = () => {
  const content = {
    minitext: `Most Search Breeds`,
    title: `66+ Breeds For you to discover`,
  };
  return (
    <MostSearchBreedsStyle>
      <div>
        <p>{content.minitext}</p>
        <div></div>
      </div>
      <div>
        <h1>{content.title}</h1>
        <a href="#!">See more</a>
      </div>
    </MostSearchBreedsStyle>
  );
};
const Header = () => {
  return (
    <Style>
      <Wrapper>
        <div>
          <div>
            <div>
              <img src={CatwikiLogo} alt="Logo" />
              <p className="heading">Get to know more about your cat breed</p>
            </div>
            <br />
            <Search placeholder="Enter your breed" />
          </div>
        </div>
        <MostSearchBreeds />
      </Wrapper>
    </Style>
  );
};

export default Header;
