import { TMenuItemsConfig } from "@/components/layout/type/sidebar.types";
import {
    IconLayoutDashboard,
    IconSend,
    IconPackage,
    IconHistory,
    IconMailForward,
    IconTrendingUp,
    IconUsers,
    IconSearch,
    IconUser,
} from "@tabler/icons-react";


export const menuItems: TMenuItemsConfig = {
    ADMIN: [
        { id: 1, name: 'Dashboard', icon: IconLayoutDashboard, route: '/dashboard' },
        { id: 2, name: 'Analytics', icon: IconTrendingUp, route: '/dashboard/analytics' },
        { id: 3, name: 'All Parcels', icon: IconPackage, route: '/dashboard/all-parcels' },
        { id: 4, name: 'User Management', icon: IconUsers, route: '/dashboard/users' },
        { id: 5, name: 'Track Parcel', icon: IconSearch, route: '/dashboard/track-parcel' },
        { id: 6, name: 'Profile', icon: IconUser, route: '/dashboard/profile' },
    ],
    SENDER: [
        { id: 1, name: 'Dashboard', icon: IconLayoutDashboard, route: '/dashboard' },
        { id: 2, name: 'My Parcels', icon: IconPackage, route: '/dashboard/my-parcels' },
        { id: 3, name: 'Send Parcel', icon: IconSend, route: '/dashboard/send-parcel' },
        { id: 4, name: 'History', icon: IconHistory, route: '/dashboard/parcel-history' },
        { id: 5, name: 'Track Parcel', icon: IconSearch, route: '/dashboard/track-parcel' },
        { id: 6, name: 'Profile', icon: IconUser, route: '/dashboard/profile' },
    ],
    RECEIVER: [
        { id: 1, name: 'Dashboard', icon: IconLayoutDashboard, route: '/dashboard' },
        { id: 2, name: 'My Parcels', icon: IconLayoutDashboard, route: '/dashboard/my-parcels' },
        { id: 3, name: 'Forwarded Parcels', icon: IconMailForward, route: '/dashboard/my' },
        { id: 4, name: 'Delivery History', icon: IconHistory, route: '/dashboard/delivery-IconHistory' },
        { id: 5, name: 'Track Parcel', icon: IconSearch, route: '/dashboard/track-parcel' },
        { id: 6, name: 'Profile', icon: IconUser, route: '/dashboard/profile' },
    ],
};