import React from "react";
import Highlighter from "react-highlight-words";

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
  searchValue: string;
}

export const CharacterItem: React.FC<CharacterItemProps> = ({
  id,
  image,
  name,
  species,
  searchValue,
}) => {
  const location = useLocation();

  return (
    <CharactersItem>
      <NavLink to={`/details/${id}`} state={{ from: location }}>
        <CharacterItemImg src={image} />
        <ItemDetailsBox>
          <CharacterItemTitle>
            <Highlighter
              searchWords={[searchValue]}
              autoEscape={true}
              textToHighlight={name}
            ></Highlighter>
          </CharacterItemTitle>
          <CharacterItemSpecie>{species}</CharacterItemSpecie>
        </ItemDetailsBox>
      </NavLink>
    </CharactersItem>
  );
};
