import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Tracking from "../pages/Tracking";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CommonLayout from "../components/layout/CommonLayout";
import DashboardLayout from "../components/layout/DashboardLayout";

// Dashboard Pages
import Dashboard from "@/pages/dashboard/Dashboard";
import Analytics from "@/pages/admin/Analytics";
import AllParcelsPage from "@/pages/admin/all-parcels";
import UserManagement from "@/pages/admin/users";
import MyParcels from "@/pages/sender/MyParcel";
import Profile from "@/pages/sender/Profile";
import TrackParcel from "@/pages/sender/TrackingParcel";
// import UserManagement from "@/pages/admin/UserManagement";
// import Settings from "@/pages/admin/Settings";
// import SendParcel from "@/pages/sender/SendParcel";
// import MyParcels from "@/pages/sender/MyParcels";
// import ParcelHistory from "@/pages/sender/ParcelHistory";
// import IncomingParcels from "@/pages/receiver/IncomingParcels";
// import DeliveryHistory from "@/pages/receiver/DeliveryHistory";
// import TrackParcel from "@/pages/common/TrackParcel";
// import Profile from "@/pages/common/Profile";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: CommonLayout,
        children: [
            { path: "/", Component: Home },
            { path: "/about", Component: About },
            { path: "/contact", Component: Contact },
            { path: "/tracking", Component: Tracking },
            { path: "/login", Component: Login },
            { path: "/register", Component: Register },
        ]
    },
    // UNIFIED DASHBOARD FOR ALL ROLES
    {
        path: "/dashboard",
        Component: DashboardLayout,
        children: [
            { path: "/dashboard", Component: Dashboard },

            // Admin Routes
            { path: "/dashboard/analytics", Component: Analytics },
            { path: "/dashboard/all-parcels", Component: AllParcelsPage },
            { path: "/dashboard/users", Component: UserManagement },
            // { path: "/dashboard/settings", Component: Settings },

            // Sender Routes
            { path: "/dashboard/my-parcels", Component: MyParcels },
            { path: "/dashboard/track-parcel", Component: TrackParcel },
            { path: "/dashboard/profile", Component: Profile },
            // { path: "/dashboard/send-parcel", Component: SendParcel },
            // { path: "/dashboard/parcel-history", Component: ParcelHistory },

            // Receiver Routes
            { path: "/dashboard/my-parcels", Component: MyParcels },
            // { path: "/dashboard/incoming-parcels", Component: IncomingParcels },
            // { path: "/dashboard/delivery-history", Component: DeliveryHistory },

            // Common Routes
            // { path: "/dashboard/track-parcel", Component: TrackParcel },
            // { path: "/dashboard/profile", Component: Profile },
        ]
    }
]);