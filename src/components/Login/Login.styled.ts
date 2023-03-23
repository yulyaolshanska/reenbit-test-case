import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  margin-bottom: 30px;
  text-align: center;
`;
export const ButtonText = styled.span``;
export const FacebookButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  background-color: #4c69ba;
  background-image: linear-gradient(#4c69ba, #3b55a0);
  text-shadow: 0 -1px 0 #354c8c;
  color: rgb(255, 255, 255);
  height: 50px;
  width: 240px;
  border: none;
  line-height: 34px;
  text-align: center;
  box-shadow: rgb(0 0 0 / 25%) 0px 2px 4px 0px;
  font-size: 16px;
  border-radius: 1px;
  transition: background-color 0.218s ease 0s, border-color 0.218s ease 0s,
    box-shadow 0.218s ease 0s;
  font-family: Roboto, arial, sans-serif;
  cursor: pointer;
  user-select: none;
  &:hover,
  :focus {
    background-color: #5b7bd5;
    background-image: linear-gradient(#5b7bd5, #4864b1);
  }
`;

export const FacebookIcon = styled(FaFacebook)`
  margin-right: 16px;
  width: 20px;
  height: 20px;
`;
