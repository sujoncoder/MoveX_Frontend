import { LoginData, User } from "./auth.type";
export type { ILogin, IRegister } from "./auth.type";


export interface IApiResponse<T> {
    success: boolean;
    statusCode: number;
    message: string;
    data: T;
};

export type LoginResponse = IApiResponse<LoginData>;
export type UserListResponse = IApiResponse<User[]>;
export type ProfileResponse = IApiResponse<User>;