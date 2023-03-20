import React from "react";
import {
  CharacterCard,
  CharacterCardTitle,
  DetailsInfo,
  DetailsItem,
  DetailsLabel,
  DetailsList,
} from "./CharacterDetails.styled";

export const CharacterDetails: React.FC = () => {
  return (
    <CharacterCard>
      <CharacterCardTitle>Information</CharacterCardTitle>
      <DetailsList>
        <DetailsItem>
          <DetailsLabel>Gender</DetailsLabel>
          <DetailsInfo>gender</DetailsInfo>
        </DetailsItem>
        <DetailsItem>
          <DetailsLabel>Status</DetailsLabel>
          <DetailsInfo>status</DetailsInfo>
        </DetailsItem>
        <DetailsItem>
          <DetailsLabel>Specie</DetailsLabel>
          <DetailsInfo>specie</DetailsInfo>
        </DetailsItem>
        <DetailsItem>
          <DetailsLabel>Origin</DetailsLabel>
          <DetailsInfo>origin</DetailsInfo>
        </DetailsItem>
        <DetailsItem>
          <DetailsLabel>Type</DetailsLabel>
          <DetailsInfo>type</DetailsInfo>
        </DetailsItem>
      </DetailsList>
    </CharacterCard>
  );
};
