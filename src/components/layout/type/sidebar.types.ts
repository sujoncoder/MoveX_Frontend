import { UserRole } from "@/types/auth.type";


// USER TYPE DEFINATION
export interface IUser {
    id: number;
    name: string;
    email: string;
    role: UserRole
};

// MENU ITEAM TYPE DEFINATION
export interface IMenuItem {
    id: string | number;
    name: string;
    icon: React.ComponentType<any>;
    route: string;
};

// MENU ITEM CONFIGURATION TYPE
export type TMenuItemsConfig = {
    [K in IUser['role']]: IMenuItem[];
};

export interface IDashboardSidebarProps {
    isOpen?: boolean;
    onToggle?: () => void;
};
