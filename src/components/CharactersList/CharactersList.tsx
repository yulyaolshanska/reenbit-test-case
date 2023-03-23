import { CharacterItem } from "components/CharacterItem/CharacterItem";
import React, { useEffect, useState } from "react";
import {
  CharactersCardList,
  PaginationButton,
  PaginationButtonContainer,
} from "./CharactersList.styled";
import { useGetCharactersQuery } from "redux/charactersApi";
import { NotFound } from "components/NotFound/NotFound";
import Loader from "components/Loader/Loader";
import { charactersSlice } from "redux/charactersSlice";
import { useAppDispatch, useAppSelector } from "hooks/hooks";

interface CharactersListProps {
  searchValue: string;
}

export const CharactersList: React.FC<CharactersListProps> = ({
  searchValue,
}) => {
  const dispatch = useAppDispatch();
  const stateCurrentPage = useAppSelector(({ characters }) => characters.page);
  const filter = useAppSelector(({ characters }) => characters.filter);
  const { changePage } = charactersSlice.actions;
  const [currentPage, setCurrentPage] = useState(stateCurrentPage);
  const [isLastPage, setIsLastPage] = useState(false);
  const { data, isLoading } = useGetCharactersQuery({ currentPage, filter });
  const characters = data?.results ?? [];

  const getFilteredCharacters = (search: string) => {
    if (search !== " ") {
      return characters.filter(({ name }) =>
        name.toLowerCase().includes(search.toLowerCase())
      );
    }
  };

  useEffect(() => {
    if (data?.info.next === null) {
      setIsLastPage(true);
    }
  }, [data]);

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
    dispatch(changePage(currentPage - 1));
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
    dispatch(changePage(currentPage + 1));
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
      {!isLoading && filteredCharacters?.length !== 0 && (
        <PaginationButtonContainer>
          <PaginationButton
            active={currentPage > 1}
            disabled={isLastPage}
            onClick={handlePrevClick}
          >
            Prev
          </PaginationButton>
          <PaginationButton
            active={!isLastPage}
            disabled={isLastPage}
            onClick={handleNextClick}
          >
            Next
          </PaginationButton>
        </PaginationButtonContainer>
      )}
    </>
  );
};
