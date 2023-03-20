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

export const charactersApi = createApi({
  reducerPath: "characterApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api" }),
  tagTypes: ["Characters"],
  endpoints: (builder) => ({
    getCharacters: builder.query<CharactersResponse, string>({
      query: () => "/character",
      providesTags: ["Characters"],
    }),
  }),
});

export const { useGetCharactersQuery } = charactersApi;
