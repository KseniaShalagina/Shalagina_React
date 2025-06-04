import React, { ReactElement, ReactNode } from "react";
import Header from './Header/Header'
import Footer from "./Footer/Footer"

interface Layoutprops {
    children: ReactNode;
}
function Layout({children}:Layoutprops) {
    return (
        <>
        <Header/>
        <main>{children}</main>
        <Footer/>
        </>
    );
}
export default Layout;