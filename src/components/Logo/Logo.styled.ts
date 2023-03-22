import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
  @media ${(p) => p.theme.media.tablet} {
    margin-bottom: 16px;
  }
`;
export const LogoImg = styled.img``;
