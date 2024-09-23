import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const PageLayout = () => {
    return (    
        <>
            <Header />
            <div className="w-full flex flex-column items-center">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default PageLayout;