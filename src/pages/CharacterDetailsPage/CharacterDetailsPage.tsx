import { CharacterDetails } from "components/CharacterDetails/CharacterDetails";
import React from "react";
import {
  CharacterImg,
  CharacterName,
  Container,
} from "./CharacterDetailsPage.styled";

const CharacterDetailsPage: React.FC = () => {
  return (
    <Container>
      <CharacterImg />
      <CharacterName>name</CharacterName>
      <CharacterDetails />
    </Container>
  );
};

export default CharacterDetailsPage;
