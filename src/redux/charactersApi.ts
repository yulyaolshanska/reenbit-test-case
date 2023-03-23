import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

// import type { Characters } from "../types";

interface CharactersResponse {
  info: {
    count: number;
    next: string | null;
    prev: string | null;
    pages: number;
  };
  results: {
    id: number;
    name: string;
    status: string;
    image: string;
    species: string;
    type: string;
  }[];
}

interface CharacterResponse {
  id: number;
  gender: string | null;
  name: string;
  status: string;
  image: string;
  species: string;
  origin: {
    name: string;
    url: string;
  };
  type: string;
}

export const charactersApi = createApi({
  reducerPath: "characterApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api" }),
  tagTypes: ["Characters", "Character"],
  endpoints: (builder) => ({
    getCharacters: builder.query<CharactersResponse, number>({
      query: (currentPage) => {
        const pageQuery = `?page=${currentPage}`;
        return `/character/${pageQuery}`;
      },
      providesTags: ["Characters"],
    }),
    getCharacterById: builder.query<CharacterResponse, string>({
      query: (id) => `/character/${id}`,
      providesTags: ["Character"],
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterByIdQuery } =
  charactersApi;
