import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQueary";


export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery(),
  endpoints: () => ({}),
});