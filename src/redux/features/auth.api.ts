import { baseApi } from "@/redux/baseApi";
import { ILogin, IRegister, LoginResponse, ProfileResponse } from "@/types";



export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation<ProfileResponse, IRegister>({
            query: (userInfo) => ({
                url: "/auth/register",
                method: "POST",
                body: userInfo
            })
        }),
        login: builder.mutation<LoginResponse, ILogin>({
            query: (userInfo) => ({
                url: "/auth/login",
                method: "POST",
                body: userInfo
            })
        })
    })
});

export const { useLoginMutation, useRegisterMutation } = authApi;