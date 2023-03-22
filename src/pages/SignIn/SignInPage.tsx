// import React from "react";
import Login from "components/Login/Login";
import { Container } from "./SignIn.styled";
import { useAppDispatch } from "hooks/hooks";
import React, { useEffect, useState } from "react";
import { authSlice } from "redux/authSlice";
import firebase from "../../firebase/firebase";

const SignIn: React.FC = () => {
  const { signIn } = authSlice.actions;
  const [user, setUser] = useState<object | null>(null);

  const dispatch = useAppDispatch();
  let currentUser = null;

  useEffect(() => {
    if (user) {
      dispatch(signIn(user));
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

export default SignIn;
