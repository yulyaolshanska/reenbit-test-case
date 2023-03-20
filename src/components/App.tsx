import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./Loader/Loader";

const CharactersPage = lazy(
  () => import("../pages/CharactersPage/CharactersPage")
);
const CharacterDetailsPage = lazy(
  () => import("../pages/CharacterDetailsPage/CharacterDetailsPage")
);

export const App: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<CharactersPage />}></Route>
        <Route path="/details" element={<CharacterDetailsPage />} />
      </Routes>
    </Suspense>
  );
};
