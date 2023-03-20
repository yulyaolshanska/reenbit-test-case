import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/globalStyle";
import theme from "styles/theme";
import Loader from "./Loader/Loader";

const CharactersPage = lazy(
  () => import("../pages/CharactersPage/CharactersPage")
);
const CharacterDetailsPage = lazy(
  () => import("../pages/CharacterDetailsPage/CharacterDetailsPage")
);

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<CharactersPage />}></Route>
          <Route path="/details" element={<CharacterDetailsPage />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};
