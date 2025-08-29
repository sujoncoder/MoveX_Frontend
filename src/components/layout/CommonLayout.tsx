import Footer from "../Footer";
import Navbar from "../Navbar";
import { Outlet } from "react-router";

const CommonLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />  {/* Added missing angle brackets */}
            <Footer />
        </>
    );
};

export default CommonLayout;