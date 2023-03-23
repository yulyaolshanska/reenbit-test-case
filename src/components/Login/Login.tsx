import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
// import FacebookLogin from "react-facebook-login";
import { signInWithFacebook, signInWithGoogle } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "hooks/hooks";
import { Container } from "pages/CharactersPage/CharactersPage.styled";
import {
  ButtonBox,
  ButtonText,
  FacebookButton,
  FacebookIcon,
  Title,
} from "./Login.styled";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const userName = useAppSelector(({ auth }) => auth.user.userName);

  useEffect(() => {
    if (userName !== "") {
      navigate("/", { replace: true });
    }
  }, [userName]);

  return (
    <Container>
      <Title>Sign in to Rick&Morty</Title>
      <ButtonBox>
        <GoogleButton onClick={signInWithGoogle}>
          Sign in with google
        </GoogleButton>
        <FacebookButton onClick={signInWithFacebook}>
          <FacebookIcon />
          <ButtonText>Sign in with facebook</ButtonText>
        </FacebookButton>
      </ButtonBox>
    </Container>
  );
};

export default Login;
