import styled from "styled-components";

export const NotFoundText = styled.p`
  font-size: 20px;
  color: red;
  @media ${(p) => p.theme.media.tablet} {
    font-size: 30px;
  }
`;
export const NotFoundBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
