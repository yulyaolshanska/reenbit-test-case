import styled from "styled-components";

export const CharacterCard = styled.div``;
export const CharacterCardTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0.15px;
  color: #8e8e93;
  @media ${(p) => p.theme.media.tablet} {
    margin-bottom: 48px;
    text-align: center;
  }
`;

export const DetailsList = styled.ul``;

export const DetailsItem = styled.li`
  padding: 10px 16px;
  width: 100%;
  @media ${(p) => p.theme.media.tablet} {
    width: 413px;
    margin: 0 auto;
  }
`;

export const DetailsLabel = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  color: #081f32;
`;
export const DetailsInfo = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  letter-spacing: 0.25px;
  color: #6e798c;
`;

// export const CharacterCard = styled.div``;
