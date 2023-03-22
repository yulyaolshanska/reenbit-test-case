import React from "react";
import { Link } from "react-router-dom";
// import { Navigation } from "components/Navigation/Navigation";
import { Container } from "./Header.styled";
import { auth } from "../../firebase/firebase";
import { authSlice } from "redux/authSlice";
import { useAppDispatch } from "hooks/hooks";

export const Header = () => {
  const { signOut } = authSlice.actions;
  const dispatch = useAppDispatch();
  const onSignOut = () => {
    dispatch(signOut());
    auth.signOut();
  };
  return (
    <header>
      <Container>
        <Link to="/signin">Sign In</Link>
        <button onClick={onSignOut}>Sign out</button>

        {/* <Navigation /> */}
      </Container>
    </header>
  );
};
