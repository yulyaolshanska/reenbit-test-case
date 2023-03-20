import { CharacterItem } from "components/CharacterItem/CharacterItem";
import React from "react";
import { CharactersCardList } from "./CharactersList.styled";

export const CharactersList: React.FC = () => {
  return (
    <CharactersCardList>
      <CharacterItem />
    </CharactersCardList>
  );
};
