import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

const Layout = (props) => {
    return (
        <div>
            <MainNavigation />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;