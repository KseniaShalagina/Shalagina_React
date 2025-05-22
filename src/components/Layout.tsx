import Header from './Header/Header'
import FirstBlock from "./Section/FirstBlock/FirstBlock";
import Fon from "./Section/Fon/Fon";
import Image from "./Section/Image/Image";
import SecondBlock from "./Section/SecondBlock/SecondBlock";
import ThirdBlock from "./Section/ThirdBlock/ThirdBlock";
import FourthBlock from "./Section/FourthBlock/FourthBlock";
function Layout() {
    return (
        <>
            <Header />
            <main>
                <FirstBlock />
                <Image><Fon/></Image>
                <SecondBlock/>
                <ThirdBlock/>
                <FourthBlock/>
            </main>
        </>
    );
}
export default Layout;