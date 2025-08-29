import { LucideIcon } from "lucide-react";

// USER TYPE DEFINATION
export interface IUser {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'sender' | 'receiver';
};

// MENU ITEAM TYPE DEFINATION
export interface IMenuItem {
    name: string;
    icon: LucideIcon;
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
