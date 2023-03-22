import { CharacterDetails } from "components/CharacterDetails/CharacterDetails";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useGetCharacterByIdQuery } from "redux/charactersApi";
import {
  BackButton,
  CharacterImg,
  CharacterName,
  Container,
  StyledGoBAckIcon,
  StyledNavLink,
} from "./CharacterDetailsPage.styled";

// interface stateType {
//   from: { pathname: string };
// }

const CharacterDetailsPage: React.FC = () => {
  const { id = "" } = useParams();
  console.log("id", id);

  const { data: character, isLoading } = useGetCharacterByIdQuery(id);
  const { state } = useLocation();
  const backLinkHref = state?.from ?? "/";
  console.log("state?.from.pathname", state?.from);
  const {
    gender = "",
    image = "",
    name = "",
    status = "",
    species = "",
    type = "",
  } = character ?? {};
  const origin = character?.origin?.name ?? "";
  console.log("origin", origin);
  return (
    <Container>
      <BackButton>
        <StyledNavLink to={backLinkHref}>
          <StyledGoBAckIcon />
          Go Back
        </StyledNavLink>
      </BackButton>
      {!isLoading && (
        <>
          <CharacterImg src={image} />
          <CharacterName>{name}</CharacterName>
          <CharacterDetails
            gender={gender}
            status={status}
            species={species}
            type={type}
            origin={origin}
          />
        </>
      )}
    </Container>
  );
};

export default CharacterDetailsPage;
