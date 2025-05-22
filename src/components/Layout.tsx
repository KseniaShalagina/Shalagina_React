import React, { ReactNode } from "react";
import Header from './Header/Header'
import FirstBlock from "./Section/FirstBlock/FirstBlock";
import Fon from "./Section/Fon/Fon";
import Image from "./Section/Image/Image";
import SecondBlock from "./Section/SecondBlock/SecondBlock";


function Layout() {
    return (
        <>
            <Header />
            <main>
                <FirstBlock />
                <Image><Fon/></Image>
                <SecondBlock/>
            </main>
        </>
    );
}
export default Layout;