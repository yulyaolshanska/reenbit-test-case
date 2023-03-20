import { CharactersList } from "components/CharactersList/CharactersList";
import { CharactersSearch } from "components/CharactersSearch/CharactersSearch";
import { Logo } from "components/Logo/Logo";
import React from "react";
import { Container } from "./CharactersPage.styled";

const CharactersPage: React.FC = () => {
  return (
    <Container>
      <Logo />
      <CharactersSearch />
      <CharactersList />
    </Container>
  );
};

export default CharactersPage;
