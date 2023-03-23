import styled from "styled-components";

export const CharactersItem = styled.li`
  @media ${(p) => p.theme.media.mobileM} {
    margin-bottom: 32px;
  }
  background: #ffffff;
  overflow: hidden;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.03);
  }
  @media screen and (min-width: 768px) and (max-width: 939px) {
    &:not(:nth-child(2n)) {
      margin-right: 20px;
    }
    &:not(:nth-last-child(-n + 2)) {
      margin-bottom: 20px;
    }
  }
  @media screen and (min-width: 940px) and (max-width: 1279px) {
    &:not(:nth-child(3n + 3)) {
      margin-right: 20px;
    }
    &:not(:nth-last-child(-n + 3)) {
      margin-bottom: 20px;
    }
  }
  @media ${(p) => p.theme.media.desktop} {
    width: 240px;
    &:not(:nth-child(4n)) {
      margin-right: 20px;
    }
    &:not(:nth-last-child(-n + 4)) {
      margin-bottom: 20px;
    }
  }
`;
export const CharacterItemImg = styled.img`
  @media ${(p) => p.theme.media.mobileM} {
    width: 312px;
  }
  @media ${(p) => p.theme.media.desktop} {
    width: 240px;
  }
`;
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
