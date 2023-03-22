import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/globalStyle";
import theme from "styles/theme";
import Loader from "./Loader/Loader";
import SharedLayout from "./SharedLayout/SharedLayout";

const CharactersPage = lazy(
  () => import("../pages/CharactersPage/CharactersPage")
);
const CharacterDetailsPage = lazy(
  () => import("../pages/CharacterDetailsPage/CharacterDetailsPage")
);
const SignInPage = lazy(() => import("../pages/SignIn/SignInPage"));

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<CharactersPage />} />
            <Route path="/details/:id" element={<CharacterDetailsPage />} />
            <Route path="/signin" element={<SignInPage />} />
          </Route>
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};
