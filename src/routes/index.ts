import { createBrowserRouter } from "react-router";

import Dashboard from "@/pages/dashboard/Dashboard";
import Analytics from "@/pages/dashboard/admin/Analytics";
import UserManagement from "@/pages/dashboard/admin/users";
import MyParcels from "@/pages/dashboard/sender/MyParcel";
import Home from "@/pages/public/Home";
import About from "@/pages/public/About";
import Contact from "@/pages/public/Contact";
import Tracking from "@/pages/public/Tracking";
import LoginForm from "@/pages/public/Login";
import Register from "@/pages/public/Register";
import CommonLayout from "@/components/layout/CommonLayout";
import DashboardLayout from "@/components/layout/DashboardLayout";
import AllParcels from "@/pages/dashboard/admin/AllParcel";
import SendParcel from "@/pages/dashboard/sender/SendParcel";
import ParcelHistory from "@/pages/dashboard/sender/ParcelHistory";
import DeliveryHistory from "@/pages/dashboard/receiver/DeliveryHistory";
import ParcelTracking from "@/pages/dashboard/common/ParcelTracking";
import Logout from "@/pages/dashboard/common/Logout";
import Profile from "@/pages/dashboard/common/Profile";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: CommonLayout,
        children: [
            { path: "/", Component: Home },
            { path: "/about", Component: About },
            { path: "/contact", Component: Contact },
            { path: "/tracking", Component: Tracking },
            { path: "/login", Component: LoginForm },
            { path: "/register", Component: Register },
        ]
    },
    {
        path: "/dashboard",
        Component: DashboardLayout,
        children: [
            { path: "/dashboard", Component: Dashboard },

            // Admin Routes
            { path: "/dashboard/all-parcels", Component: AllParcels },
            { path: "/dashboard/analytics", Component: Analytics },
            { path: "/dashboard/users", Component: UserManagement },

            // Sender Routes
            { path: "/dashboard/my-parcels", Component: MyParcels },
            { path: "/dashboard/profile", Component: Profile },
            { path: "/dashboard/send-parcel", Component: SendParcel },
            { path: "/dashboard/parcel-history", Component: ParcelHistory },

            // Receiver Routes
            { path: "/dashboard/my-parcels", Component: MyParcels },
            { path: "/dashboard/delivery-history", Component: DeliveryHistory },

            // Common Routes
            { path: "/dashboard/profile", Component: Profile },
            { path: "/dashboard/track-parcel", Component: ParcelTracking },
            { path: "/dashboard/logout", Component: Logout },
        ]
    }
]);