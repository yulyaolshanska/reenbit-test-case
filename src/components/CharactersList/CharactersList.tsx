import { CharacterItem } from "components/CharacterItem/CharacterItem";
import React from "react";
import { CharactersCardList } from "./CharactersList.styled";
import { useGetCharactersQuery } from "redux/charactersApi";
import { NotFound } from "components/NotFound/NotFound";
import Loader from "components/Loader/Loader";

interface CharactersListProps {
  searchValue: string;
}

export const CharactersList: React.FC<CharactersListProps> = ({
  searchValue,
}) => {
  const { data, isLoading } = useGetCharactersQuery("");
  const characters = data?.results ?? [];
  const getFilteredCharacters = (search: string) => {
    if (search !== " ") {
      return characters.filter(({ name }) =>
        name.toLowerCase().includes(search.toLowerCase())
      );
    }
  };
  const filteredCharacters = getFilteredCharacters(searchValue) || characters;

  return (
    <>
      {!isLoading && filteredCharacters.length === 0 && (
        <NotFound value={searchValue} />
      )}
      {!isLoading ? (
        <CharactersCardList>
          {filteredCharacters
            .slice()
            .sort((a, b) => a?.name.localeCompare(b?.name))
            .map(({ id, image, name, species }) => (
              <CharacterItem
                key={id}
                id={id}
                image={image}
                name={name}
                species={species}
                searchValue={searchValue}
              />
            ))}
        </CharactersCardList>
      ) : (
        <Loader />
      )}
    </>
  );
};
