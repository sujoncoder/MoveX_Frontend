import { createBrowserRouter } from "react-router";
import ProtectedRoute from "@/routes/ProtectedRoute";

// layouts
import PublicLayout from "@/layout/PublicLayout";
import DashboardLayout from "@/layout/DashboardLayout";

// public pages
import HomePage from "@/pages/public/HomePage";
import AboutPage from "@/pages/public/AboutPage";
import ContactPage from "@/pages/public/ContactPage";
import LoginPage from "@/pages/public/LoginPage";
import RegisterPage from "@/pages/public/Register";
import UnauthorizedPage from "@/pages/UnauthorizedPage";

// dashboard common
import Dashboard from "@/pages/dashboard/Dashboard";
import Profile from "@/pages/dashboard/common/Profile";
import ParcelTracking from "@/pages/dashboard/common/ParcelTracking";
import Logout from "@/pages/dashboard/common/Logout";

// admin
import Analytics from "@/pages/dashboard/admin/Analytics";
import UserManagement from "@/pages/dashboard/admin/users";
import AllParcels from "@/pages/dashboard/admin/AllParcel";

// sender
import MyParcels from "@/pages/dashboard/sender/MyParcel";
import SendParcel from "@/pages/dashboard/sender/SendParcel";

// receiver
import DeliveryHistory from "@/pages/dashboard/receiver/DeliveryHistory";

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
            { path: "/unauthorized", Component: UnauthorizedPage },
        ],
    },

    // 🔐 PROTECTED DASHBOARD
    {
        path: "/dashboard",
        Component: () => (
            <ProtectedRoute>
            <DashboardLayout />
            </ProtectedRoute>
        ),
        children: [
            {
                path: "/dashboard",
                Component: Dashboard,
            },

            // 🛡️ ADMIN ROUTES
            {
                path: "/dashboard/all-parcels",
                Component: () => (
                    <ProtectedRoute allowedRoles= { ["ADMIN"]} >
                    <AllParcels />
                    </ProtectedRoute>
                ),
            },
{
    path: "/dashboard/analytics",
        Component: () => (
            <ProtectedRoute allowedRoles= { ["ADMIN"]} >
            <Analytics />
            </ProtectedRoute>
                ),
},
{
    path: "/dashboard/users",
        Component: () => (
            <ProtectedRoute allowedRoles= { ["ADMIN"]} >
            <UserManagement />
            </ProtectedRoute>
                ),
},

// 📦 SENDER ROUTES
{
    path: "/dashboard/my-parcels",
        Component: () => (
            <ProtectedRoute allowedRoles= { ["SENDER"]} >
            <MyParcels />
            </ProtectedRoute>
                ),
},
{
    path: "/dashboard/send-parcel",
        Component: () => (
            <ProtectedRoute allowedRoles= { ["SENDER"]} >
            <SendParcel />
            </ProtectedRoute>
                ),
},

// 🚚 RECEIVER ROUTES
{
    path: "/dashboard/delivery-history",
        Component: () => (
            <ProtectedRoute allowedRoles= { ["RECEIVER"]} >
            <DeliveryHistory />
            </ProtectedRoute>
                ),
},

// 🔓 COMMON AUTH ROUTES
{
    path: "/dashboard/profile",
        Component: () => (
            <ProtectedRoute allowedRoles= { ["ADMIN", "SENDER", "RECEIVER"]} >
            <Profile />
            </ProtectedRoute>
                ),
},
{
    path: "/dashboard/track-parcel",
        Component: () => (
            <ProtectedRoute allowedRoles= { ["ADMIN", "SENDER", "RECEIVER"]} >
            <ParcelTracking />
            </ProtectedRoute>
                ),
},
{
    path: "/dashboard/logout",
        Component: () => (
            <ProtectedRoute allowedRoles= { ["ADMIN", "SENDER", "RECEIVER"]} >
            <Logout />
            </ProtectedRoute>
                ),
},
        ],
    },
]);
