import { IUser } from '@/types/user';

export interface LoginResponse {
    user: IUser;
    token: string;
};

export interface RegisterResponse {
    user: IUser;
};