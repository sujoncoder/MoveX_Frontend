export interface ILogin {
    email: string;
    password: string
};

export enum UserRole {
    ADMIN = "ADMIN",
    SENDER = "SENDER",
    RECEIVER = "RECEIVER",
};

export interface User {
    _id: string;
    name: string;
    email: string;
    phone: string;
    role: UserRole;
    isBlocked: boolean;
    createdAt: string;
    updatedAt: string;
};

export interface LoginData {
    accessToken: string;
    refreshToken: string;
    user: User;
};


// --------------------------- REGISTER TYPE ----------------------
export interface IRegister {
    name: string;
    email: string;
    phone: string;
    password: string
}