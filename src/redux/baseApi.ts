import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../config";

// BASE API SETUP
export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: config.baseUrl,
        credentials: "include",
    }),
    tagTypes: ["USER"],
    endpoints: () => ({}),
});