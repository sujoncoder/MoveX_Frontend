import { TMenuItemsConfig } from "@/components/layout/type/sidebar.types";
import {
    LayoutDashboard,
    Send,
    Package,
    History,
    Inbox,
    TrendingUp,
    Users,
    Search,
    User,
} from "lucide-react";


export const menuItems: TMenuItemsConfig = {
    ADMIN: [
        { name: 'Dashboard', icon: LayoutDashboard, route: '/dashboard' },
        { name: 'Analytics', icon: TrendingUp, route: '/dashboard/analytics' },
        { name: 'All Parcels', icon: Package, route: '/dashboard/all-parcels' },
        { name: 'User Management', icon: Users, route: '/dashboard/users' },
        { name: 'Track Parcel', icon: Search, route: '/dashboard/track-parcel' },
        { name: 'Profile', icon: User, route: '/dashboard/profile' },
    ],
    SENDER: [
        { name: 'Dashboard', icon: LayoutDashboard, route: '/dashboard' },
        { name: 'My Parcels', icon: Package, route: '/dashboard/my-parcels' },
        { name: 'Send Parcel', icon: Send, route: '/dashboard/send-parcel' },
        { name: 'History', icon: History, route: '/dashboard/parcel-history' },
        { name: 'Track Parcel', icon: Search, route: '/dashboard/track-parcel' },
        { name: 'Profile', icon: User, route: '/dashboard/profile' },
    ],
    RECEIVER: [
        { name: 'Dashboard', icon: LayoutDashboard, route: '/dashboard' },
        { name: 'My parcels', icon: LayoutDashboard, route: '/dashboard/my-parcels' },
        { name: 'My Parcels', icon: Inbox, route: '/dashboard/my' },
        { name: 'Delivery History', icon: History, route: '/dashboard/delivery-history' },
        { name: 'Track Parcel', icon: Search, route: '/dashboard/track-parcel' },
        { name: 'Profile', icon: User, route: '/dashboard/profile' },
    ]
};