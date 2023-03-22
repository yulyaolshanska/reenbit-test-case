import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const SarchForm = styled.form`
  position: relative;
  margin-bottom: 32px;
  @media ${(p) => p.theme.media.tablet} {
    margin-bottom: 60px;
  }
`;
export const SearchFormInput = styled.input`
  display: block;
  padding: 16px 52px;
  width: 100%;
  font-size: 16px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 8px;
`;
export const SearchBtn = styled.button`
  position: absolute;
  top: 15px;
  left: 20px;
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
`;
export const StyledSearchIcon = styled(FaSearch)`
  /* font-size: 20px; */
  fill: rgba(0, 0, 0, 0.54);
  width: 18;
  height: 18px;
`;
