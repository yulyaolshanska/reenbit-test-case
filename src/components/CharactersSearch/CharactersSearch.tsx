import React from "react";
import {
  SarchForm,
  SearchBtn,
  SearchFormInput,
} from "./CharactersSearch.styled";

export const CharactersSearch: React.FC = () => {
  return (
    <SarchForm>
      <SearchFormInput />
      <SearchBtn></SearchBtn>
    </SarchForm>
  );
};
