import styled from "styled-components";

export const CharactersItem = styled.li`
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  @media ${(p) => p.theme.media.tablet} {
    &:not(:nth-child(2n)) {
      margin-right: 20px;
    }
    &:not(:nth-last-child(-n + 2)) {
      margin-bottom: 20px;
    }
  }
  @media screen and (min-width: 940px) {
    &:not(:nth-child(3n)) {
      margin-right: 20px;
    }
    &:not(:nth-last-child(-n + 3)) {
      margin-bottom: 20px;
    }
  }
  @media ${(p) => p.theme.media.desktop} {
    &:not(:nth-child(4n)) {
      margin-right: 20px;
    }
    &:not(:nth-last-child(-n + 4)) {
      margin-bottom: 20px;
    }
  }
`;
export const CharacterItemImg = styled.img``;
export const ItemDetailsBox = styled.div`
  padding: 12px 16px;
`;
export const CharacterItemTitle = styled.h2`
  font-size: 20px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.87);
`;
export const CharacterItemSpecie = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.6);
`;
