import React from "react";
import {
  CharacterCard,
  CharacterCardTitle,
  DetailsInfo,
  DetailsItem,
  DetailsLabel,
  DetailsList,
} from "./CharacterDetails.styled";

interface CharacterDetailsProps {
  gender: string | null;
  status: string;
  species: string;
  origin: string;
  type: string;
}

export const CharacterDetails: React.FC<CharacterDetailsProps> = ({
  gender,
  status,
  species,
  type,
  origin,
}) => {
  return (
    <CharacterCard>
      <CharacterCardTitle>Information</CharacterCardTitle>
      <DetailsList>
        <DetailsItem>
          <DetailsLabel>Gender</DetailsLabel>
          <DetailsInfo>{gender}</DetailsInfo>
        </DetailsItem>
        <DetailsItem>
          <DetailsLabel>Status</DetailsLabel>
          <DetailsInfo>{status}</DetailsInfo>
        </DetailsItem>
        <DetailsItem>
          <DetailsLabel>Specie</DetailsLabel>
          <DetailsInfo>{species}</DetailsInfo>
        </DetailsItem>
        <DetailsItem>
          <DetailsLabel>Origin</DetailsLabel>
          <DetailsInfo>{origin}</DetailsInfo>
        </DetailsItem>
        <DetailsItem>
          <DetailsLabel>Type</DetailsLabel>
          <DetailsInfo>{type !== "" ? type : "Uknown"}</DetailsInfo>
        </DetailsItem>
      </DetailsList>
    </CharacterCard>
  );
};
