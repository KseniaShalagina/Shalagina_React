import { Outlet } from 'react-router'
// import { ReactNode } from "react";
import Header from './Header/Header'
import Footer from "./Footer/Footer"

// interface LayoutProps {
//     children: ReactNode;
// }
function Layout() {
    return (
        <>
            <Header />
            {/* <main>{children}</main> */}
            <main><Outlet /></main>
            <Footer />
        </>
    );
}
export default Layout;