import Login from "components/Login/Login";
import { Container } from "./LogInPage.styled";
import { useAppDispatch } from "hooks/hooks";
import React, { useEffect, useState } from "react";
import { authSlice } from "redux/authSlice";
import firebase from "../../firebase/firebase";

const LoginPage: React.FC = () => {
  const { logIn } = authSlice.actions;
  const [user, setUser] = useState<object | null>(null);
  const dispatch = useAppDispatch();
  let currentUser = null;

  useEffect(() => {
    if (user) {
      dispatch(logIn(user));
    }
  }, [user]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        currentUser = {
          userName: user?.displayName,
          userEmail: user?.email,
        };
        // dispatch(signIn(currentUser));
        setUser(currentUser);
      }
    });
  }, []);

  return (
    <Container>
      <Login />
    </Container>
  );
};

export default LoginPage;
