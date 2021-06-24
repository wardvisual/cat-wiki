import React from "react";
import styled from "styled-components";

import { SearchAltIcon } from "../Icons";

const { StyledSearch, StyledSearchHistoryBox, Style } = {
  Style: styled.div`
    background: var(--light-1);
    border-radius: var(--radius);
    padding: 0 0.7rem 0 0.3rem;
    box-shadow: var(--shadow);
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 999;
  `,
  StyledSearch: styled.input`
    width: 100%;
    padding: 1.3rem 1.5rem 1.3rem 1.5rem;
    display: flex;
  `,
  StyledSearchHistoryBox: styled.div`
    padding: 0.3rem;
    margin-top: 1rem;
    background: var(--light-1);
    border-radius: calc(var(--radius) - 2rem);

    > div {
      color: var(--dark);
      max-height: 10rem;
      overflow-y: auto;

      display: grid;

      p {
        padding: 1rem;
        border-radius: calc(var(--radius) - 2rem);
      }
      p:hover {
        background: var(--light-3);
        transition: var(--transition);
        cursor: pointer;
      }
    }
  `,
};

const SearchHistoryBox = () => {
  return (
    <StyledSearchHistoryBox>
      <div>
        <p>sdsadasd</p>
        <p>sdsadasd</p>
        <p>sdsadasd</p>
        <p>sdsadasd</p>
        <p>sdsadasd</p>
      </div>
    </StyledSearchHistoryBox>
  );
};

const Search = ({ value, placeholder, name }) => {
  const onChangeHandler = () => {};
  return (
    <div>
      <Style>
        <StyledSearch
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
        <SearchAltIcon size="2" color="var(--dark)" />
      </Style>
      <SearchHistoryBox />
    </div>
  );
};

export default Search;
