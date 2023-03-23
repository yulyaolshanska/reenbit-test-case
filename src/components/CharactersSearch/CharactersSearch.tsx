import { useAppDispatch } from "hooks/hooks";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { charactersSlice } from "redux/charactersSlice";
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
  const dispatch = useAppDispatch();
  const { changeFilter } = charactersSlice.actions;
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("filter");
  const [searchValue, setSearchValue] = useState(query || "");

  useEffect(() => {
    setSearchParams({ filter: searchValue });
    onSearchSubmit(searchValue);
    dispatch(changeFilter(searchValue));
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
      <SearchFormInput type="search" name="search" defaultValue={searchValue} />
      <SearchBtn type="submit">
        <StyledSearchIcon size="18px" />
      </SearchBtn>
    </SarchForm>
  );
};
