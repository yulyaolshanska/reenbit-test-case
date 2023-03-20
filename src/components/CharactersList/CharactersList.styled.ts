import styled from "styled-components";

export const CharactersCardList = styled.ul`
  @media ${(p) => p.theme.media.tablet} {
    display: flex;
    flex-wrap: wrap;
  }
`;
