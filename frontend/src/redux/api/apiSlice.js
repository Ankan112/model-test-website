import { getFromLocalStorage } from "@/utils/localStorage";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:8000/api/v1`,
    // baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}api/v1`,
    prepareHeaders: (headers) => {
      headers.set("authorization", getFromLocalStorage("accessToken"));
      return headers;
    },
  }),
  tagTypes: ["user"],
  endpoints: () => ({}),
});

export default apiSlice;
