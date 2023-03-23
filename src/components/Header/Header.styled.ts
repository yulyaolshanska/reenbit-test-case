import styled from "styled-components";
import { FiLogIn } from "react-icons/fi";
import { GrHomeRounded } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";

import { NavLink } from "react-router-dom";
export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #3e8f849e;
  /* justify-content: flex-end; */
  padding: 15px 20px;
  margin-left: auto;
  margin-right: auto;
  width: 360px;

  @media ${(p) => p.theme.media.tablet} {
    width: 768px;
  }
  @media screen and (min-width: 940px) {
    width: 940px;
  }

  @media ${(p) => p.theme.media.desktop} {
    margin-left: auto;
    margin-right: auto;
    width: 1060px;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: auto;
`;

export const StyledHomeLink = styled(NavLink)`
  padding: 10px;
  display: block;
  color: #0e5634;
  font-weight: 700;
  @media ${(p) => p.theme.media.desktop} {
    font-size: 18px;
  }
`;
export const UserName = styled.p`
  margin-right: 15px;
  color: #0e5634;
  font-weight: 700;
  @media ${(p) => p.theme.media.desktop} {
    font-size: 18px;
  }
`;
export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-left: auto;
  padding: 10px;
  font-size: 14px;
  border: 2px solid #3e8f849e;
  background-color: transparent;
  border-radius: 4px;
  color: #0e5634;
  font-weight: 700;
  @media ${(p) => p.theme.media.desktop} {
    font-size: 18px;
  }
`;
export const LoginIcon = styled(FiLogIn)`
  margin-right: 10px;
`;

export const HomeIcon = styled(GrHomeRounded)`
  margin-right: 8px;
  /* fill: #0e563494; */
`;
export const LogoutIcon = styled(BiLogOut)`
  margin-right: 10px;
`;

export const SignOutButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 14px;
  border: 2px solid #3e8f849e;
  background-color: transparent;
  border-radius: 4px;
  color: #0e5634;
  font-weight: 700;
  @media ${(p) => p.theme.media.desktop} {
    font-size: 15px;
  }
`;
