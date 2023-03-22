import React from "react";
import {
  SarchForm,
  SearchBtn,
  SearchFormInput,
  StyledSearchIcon,
} from "./CharactersSearch.styled";

export const CharactersSearch: React.FC = () => {
  return (
    <SarchForm>
      <SearchFormInput />
      <SearchBtn>
        <StyledSearchIcon size="18px" />
      </SearchBtn>
    </SarchForm>
  );
};
