import { CharactersList } from "components/CharactersList/CharactersList";
import { CharactersSearch } from "components/CharactersSearch/CharactersSearch";
import { Logo } from "components/Logo/Logo";
import React, { useState } from "react";
import { Container } from "./CharactersPage.styled";

const CharactersPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const onSearchSubmit = (searchValue: string) => {
    setSearchValue(searchValue);
  };

  return (
    <Container>
      <Logo />
      <CharactersSearch onSearchSubmit={onSearchSubmit} />
      <CharactersList searchValue={searchValue} />
    </Container>
  );
};

export default CharactersPage;
