import React from "react";
import {
  CharacterItemImg,
  CharacterItemSpecie,
  CharacterItemTitle,
  CharactersItem,
  ItemDetailsBox,
} from "./CharacterItem.styled";

export const CharacterItem: React.FC = () => {
  return (
    <CharactersItem>
      <CharacterItemImg />
      <ItemDetailsBox>
        <CharacterItemTitle>title</CharacterItemTitle>
        <CharacterItemSpecie>specie</CharacterItemSpecie>
      </ItemDetailsBox>
    </CharactersItem>
  );
};
