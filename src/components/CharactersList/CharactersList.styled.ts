import styled from "styled-components";

export const CharactersCardList = styled.ul`
  @media ${(p) => p.theme.media.tablet} {
    display: flex;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 768px) and (max-width: 939px) {
    justify-content: space-around;
  }
`;
