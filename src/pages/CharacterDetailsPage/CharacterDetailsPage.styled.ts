import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { IoArrowBackSharp } from "react-icons/io5";

export const Container = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  @media ${(p) => p.theme.media.tablet} {
    /* padding: 76px 24px; */
  }
`;

export const BackButton = styled.button`
  display: flex;
  margin-left: 30px;
  margin-bottom: 78px;
  width: 130px;
  border: none;
  background-color: transparent;
  font-family: "Karla", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #000000;
  @media ${(p) => p.theme.media.tablet} {
    margin-bottom: 32px;
  }
`;

export const StyledGoBAckIcon = styled(IoArrowBackSharp)`
  width: 16px;
  height: 16px;
  margin-right: 12px;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  width: 100%;
`;
export const CharacterName = styled.h2`
  margin-bottom: 34px;
  font-weight: 400;
  font-size: 32px;
  line-height: 1.2;
  text-align: center;
  color: #081f32;
  @media ${(p) => p.theme.media.tablet} {
    font-size: 48px;
    margin-bottom: 48px;
  }
`;
export const CharacterImg = styled.img`
  margin-left: auto;
  margin-right: auto;

  margin-bottom: 34px;
  border: 5px solid #f2f2f7;
  border-radius: 50%;
  width: 150px;
  @media ${(p) => p.theme.media.tablet} {
    width: 300px;
    margin-bottom: 16px;
  }
`;

// export const CardTitle = styled.h3`
//
// `;

// export const CardTitle = styled.h2``;
// export const CardTitle = styled.h2``;
// export const CardTitle = styled.h2``;