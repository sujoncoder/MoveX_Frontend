import { baseApi } from "../baseApi";

// AUTH API
export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProfile: builder.query<any, void>({
            query: () => ({
                url: "/users/my-profile",
                method: "GET",
            }),
            keepUnusedDataFor: 0,
        }),
    }),
});


export const {
    useGetProfileQuery,
    useLazyGetProfileQuery,
} = userApi;