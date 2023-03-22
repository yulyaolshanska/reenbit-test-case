import React from "react";
import { NavLink, useLocation } from "react-router-dom";
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
  id,
  image,
  name,
  species,
}) => {
  const location = useLocation();

  return (
    <CharactersItem>
      <NavLink to={`/details/${id}`} state={{ from: location }}>
        <CharacterItemImg src={image} />
        <ItemDetailsBox>
          <CharacterItemTitle>{name}</CharacterItemTitle>
          <CharacterItemSpecie>{species}</CharacterItemSpecie>
        </ItemDetailsBox>
      </NavLink>
    </CharactersItem>
  );
};
