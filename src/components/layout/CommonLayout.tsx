import { Outlet } from "react-router";

import Footer from "../Footer";
import Navbar from "../Navbar";
import Container from "../ui/Container";

const CommonLayout = () => {
    return (
        <>
            <Container className="border">
                <Navbar />
                <Outlet />
            </Container>
            <Footer />
        </>
    );
};
export default CommonLayout;