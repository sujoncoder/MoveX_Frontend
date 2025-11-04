import React from 'react';
import { LayoutDashboard, Send, Package, History, TrendingUp, Users, Search, PackageOpen } from "lucide-react";


interface IMenuItem {
    name: string;
    icon: React.ElementType;
    route: string;
};

const users = {
    ADMIN: "admin",
    SENDER: "sender",
    RECEIVER: "receiver"
};

export const role = users.SENDER;

const sidebarLinks: Record<'admin' | 'sender' | 'receiver', IMenuItem[]> = {
    admin: [
        { name: 'Dashboard', icon: LayoutDashboard, route: '/dashboard' },
        { name: 'Parcels', icon: PackageOpen, route: '/dashboard/all-parcels' },
        { name: 'User Manage', icon: Users, route: '/dashboard/users' },
        { name: 'Analytics', icon: TrendingUp, route: '/dashboard/analytics' },
        { name: 'Track Parcel', icon: Search, route: '/dashboard/track-parcel' },
    ],
    sender: [
        { name: 'Dashboard', icon: LayoutDashboard, route: '/dashboard' },
        { name: 'My Parcel', icon: Package, route: '/dashboard/my-parcels' },
        { name: 'Send Parcel', icon: Send, route: '/dashboard/send-parcel' },
        { name: 'History', icon: History, route: '/dashboard/parcel-history' },
        { name: 'Track Parcel', icon: Search, route: '/dashboard/track-parcel' },
    ],
    receiver: [
        { name: 'Dashboard', icon: LayoutDashboard, route: '/dashboard' },
        { name: 'My Parcels', icon: Package, route: '/dashboard/my-parcels' },
        { name: 'Delivery History', icon: History, route: '/dashboard/delivery-history' },
        { name: 'Track Parcel', icon: Search, route: '/dashboard/track-parcel' },
    ],
};

export let menuItems: IMenuItem[] = [];

if (role === "admin") {
    menuItems = sidebarLinks.admin;
} else if (role === "sender") {
    menuItems = sidebarLinks.sender;
} else if (role === "receiver") {
    menuItems = sidebarLinks.receiver;
} else {
    menuItems = [];
};