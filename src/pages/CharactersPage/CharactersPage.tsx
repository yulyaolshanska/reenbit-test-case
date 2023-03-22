import { CharactersList } from "components/CharactersList/CharactersList";
import { CharactersSearch } from "components/CharactersSearch/CharactersSearch";
import { Logo } from "components/Logo/Logo";
import React, { useState } from "react";
// import {useEffect } from "react";

import { Container } from "./CharactersPage.styled";

// import Login from "../../firebase/Login";
// import firebase from "../../firebase/firebase";
// import { auth } from "../../firebase/firebase";

const CharactersPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const onSearchSubmit = (searchValue: string) => {
    setSearchValue(searchValue);
  };
  //
  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     setUser(user);
  //   });
  // }, []);
  // console.log(user);
  return (
    <Container>
      <Logo />
      {/* <Login />
      <button onClick={() => auth.signOut()}>Sign out</button> */}
      <CharactersSearch onSearchSubmit={onSearchSubmit} />
      <CharactersList searchValue={searchValue} />
    </Container>
  );
};

export default CharactersPage;
