import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import UserBar from "./UserBar";
import Card from "../ui/Card";

const Layout = (props) => {
    return (
        <div>
            <MainNavigation />
            <UserBar />
            <Card className="w-3/4 my-[50px] m-auto bg-red-500">
                {props.children}
            </Card>
            <Footer />
        </div>
    );
};

export default Layout;