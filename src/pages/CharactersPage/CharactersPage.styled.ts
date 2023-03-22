import styled from "styled-components";

export const Container = styled.div`
  padding: 92px 24px;
  margin-left: auto;
  margin-right: auto;
  width: 360px;

  @media ${(p) => p.theme.media.tablet} {
    padding: 86px 0px;
    width: 768px;
  }
  @media screen and (min-width: 940px) {
    width: 940px;
  }

  @media ${(p) => p.theme.media.desktop} {
    padding: 86px 20px;

    margin-left: auto;
    margin-right: auto;
    width: 1060px;
  }
`;
