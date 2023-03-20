import { CharacterItem } from "components/CharacterItem/CharacterItem";
import React from "react";
import { CharactersCardList } from "./CharactersList.styled";
import { useGetCharactersQuery } from "redux/charactersApi";

export const CharactersList: React.FC = () => {
  const { data, error, isLoading } = useGetCharactersQuery("");
  console.log("data", data);
  const characters = data?.results ?? [];
  // console.log("results", characters);
  // { id, image, name, species }
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
