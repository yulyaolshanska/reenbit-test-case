import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  SarchForm,
  SearchBtn,
  SearchFormInput,
  StyledSearchIcon,
} from "./CharactersSearch.styled";

interface CharactersSearchProps {
  onSearchSubmit: (searchValue: string) => void;
}

export const CharactersSearch: React.FC<CharactersSearchProps> = ({
  onSearchSubmit,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("filter");
  const [searchValue, setSearchValue] = useState(query || "");
  // const [inputValue, setInputValue] = useState(query || "");

  useEffect(() => {
    setSearchParams({ filter: searchValue });
    onSearchSubmit(searchValue);
  }, [searchValue, setSearchParams]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearchSubmit(searchValue);
  };
  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    setSearchValue(e.currentTarget.search.value);
    onSearchSubmit(searchValue);
  };

  return (
    <SarchForm onChange={handleChange} onSubmit={handleSubmit}>
      <SearchFormInput type="search" name="search" value={searchValue} />
      <SearchBtn type="submit">
        <StyledSearchIcon size="18px" />
      </SearchBtn>
    </SarchForm>
  );
};
