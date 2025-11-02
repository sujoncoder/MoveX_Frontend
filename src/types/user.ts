export type Role = 'admin' | 'sender' | 'receiver';

export interface IUser {
    id: number | string;
    name: string;
    email: string;
    role: Role;
};

export interface AuthCredentials {
    email: string;
    password: string;
};

export interface RegisterData extends IUser {
    password: string;
};