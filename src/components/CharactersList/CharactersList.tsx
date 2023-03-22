import { CharacterItem } from "components/CharacterItem/CharacterItem";
import React from "react";
import { CharactersCardList } from "./CharactersList.styled";
import { useGetCharactersQuery } from "redux/charactersApi";

export const CharactersList: React.FC = () => {
  const { data } = useGetCharactersQuery("");
  const characters = data?.results ?? [];

  return (
    <CharactersCardList>
      {characters.map(({ id, image, name, species }) => (
        <CharacterItem
          key={id}
          id={id}
          image={image}
          name={name}
          species={species}
        />
      ))}
    </CharactersCardList>
  );
};
