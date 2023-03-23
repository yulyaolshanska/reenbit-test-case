import styled from "styled-components";

export const CharactersCardList = styled.ul`
  @media ${(p) => p.theme.media.tablet} {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 768px) and (max-width: 939px) {
    justify-content: space-around;
  }
`;

export const StyledButton = styled.button<{ active: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 28px;
  border: ${(p) => (p.active ? "none" : "2px solid")};
  border-radius: 4px;
  background-color: ${(p) => (p.active ? p.theme.colors.accent : "#fff")};
  color: ${(p) =>
    p.active ? p.theme.colors.secondatyBtnText : p.theme.colors.accent};

  :hover:not(:disabled),
  :focus:not(:disabled) {
    background-color: ${(p) => (p.active ? p.theme.colors.accent : "#fff")};
    border-color: ${(p) => p.theme.colors.hoverBtn};
    color: ${(p) =>
      p.active ? p.theme.colors.secondatyBtnText : p.theme.colors.accent};
    outline: none;
    cursor: ${(p) => (p.active ? "pointer" : "none")};
  }
`;

export const PaginationButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const PaginationButton = styled(StyledButton)`
  border-radius: 15%;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: ${(p) => (p.active ? "scale(1.1)" : "scale(1.0)")};
  }
  :not(:last-child) {
    margin-right: 10px;
  }
`;
