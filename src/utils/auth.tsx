import { IUser, Role } from "@/types/user";

// GET CURRENT USER
export const getCurrentUser = (): IUser => {
    return {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        role: "receiver" as Role,
        address: "Bangladesh Magura sadar",
        phone: "01999999999",
    };
};