import { baseApi } from "@/redux/baseApi";
import { ILogin, IRegister, LoginResponse, ProfileResponse } from "@/types";


// AUTH API
export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation<ProfileResponse, IRegister>({
            query: (userInfo) => ({
                url: "/auth/register",
                method: "POST",
                body: userInfo
            }),
            invalidatesTags: ['User'],
        }),
        login: builder.mutation<LoginResponse, ILogin>({
            query: (userInfo) => ({
                url: "/auth/login",
                method: "POST",
                body: userInfo
            }),
            invalidatesTags: ['User'],
        }),
        getUser: builder.query<ProfileResponse, void>({
            query: () => ({
                url: "/users/my-profile",
                method: "GET"
            }),
            providesTags: ['User'],
        }),
        logout: builder.mutation<{ message: string }, void>({
            query: () => ({
                url: "/auth/logout",
                method: "POST"
            }),
            invalidatesTags: ['User'],
        }),
    })
});

export const {
    useLoginMutation,
    useRegisterMutation,
    useGetUserQuery,
    useLogoutMutation
} = authApi;