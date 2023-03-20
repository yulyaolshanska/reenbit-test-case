import React from "react";
import {
  CharacterItemImg,
  CharacterItemSpecie,
  CharacterItemTitle,
  CharactersItem,
  ItemDetailsBox,
} from "./CharacterItem.styled";

interface CharacterItemProps {
  id: number;
  image: string;
  name: string;
  species: string;
}

export const CharacterItem: React.FC<CharacterItemProps> = ({
  // id,
  image,
  name,
  species,
}) => {
  return (
    <CharactersItem>
      <CharacterItemImg src={image} />
      <ItemDetailsBox>
        <CharacterItemTitle>{name}</CharacterItemTitle>
        <CharacterItemSpecie>{species}</CharacterItemSpecie>
      </ItemDetailsBox>
    </CharactersItem>
  );
};
