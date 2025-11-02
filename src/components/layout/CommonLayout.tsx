import Footer from "../Footer";
import Navbar from "../Navbar";
import { Outlet } from "react-router";

const CommonLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default CommonLayout;