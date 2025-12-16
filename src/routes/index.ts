import { createBrowserRouter } from "react-router";
import Dashboard from "@/pages/dashboard/Dashboard";
import Analytics from "@/pages/dashboard/admin/Analytics";
import UserManagement from "@/pages/dashboard/admin/users";
import MyParcels from "@/pages/dashboard/sender/MyParcel";
import AllParcels from "@/pages/dashboard/admin/AllParcel";
import SendParcel from "@/pages/dashboard/sender/SendParcel";
import DeliveryHistory from "@/pages/dashboard/receiver/DeliveryHistory";
import ParcelTracking from "@/pages/dashboard/common/ParcelTracking";
import Logout from "@/pages/dashboard/common/Logout";
// import Profile from "@/pages/dashboard/common/Profile";
import PublicLayout from "@/layout/PublicLayout";
import DashboardLayout from "@/layout/DashboardLayout";
import HomePage from "@/pages/public/HomePage";
import AboutPage from "@/pages/public/AboutPage";
import ContactPage from "@/pages/public/ContactPage";
import LoginPage from "@/pages/public/LoginPage";
import RegisterPage from "@/pages/public/Register";
import NotFoundPage from "@/pages/Notfound";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: PublicLayout,
        children: [
            { path: "/", Component: HomePage },
            { path: "/about", Component: AboutPage },
            { path: "/contact", Component: ContactPage },
            { path: "/login", Component: LoginPage },
            { path: "/register", Component: RegisterPage },
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
            // { path: "/dashboard/profile", Component: Profile },
            { path: "/dashboard/send-parcel", Component: SendParcel },

            // Receiver Routes
            { path: "/dashboard/my-parcels", Component: MyParcels },
            { path: "/dashboard/delivery-history", Component: DeliveryHistory },

            // Common Routes
            // { path: "/dashboard/profile", Component: Profile },
            { path: "/dashboard/track-parcel", Component: ParcelTracking },
            { path: "/dashboard/logout", Component: Logout },
        ]
    },
    {
        path: "*",
        Component: NotFoundPage
    }
]);