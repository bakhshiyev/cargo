import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import UserBar from "./UserBar";
import Card from "../ui/Card";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

const Layout = (props) => {
    const authCtx = useContext(AuthContext);

    return (
        <div>
            <MainNavigation />
            {authCtx.isLoggedIn && <UserBar />}
            <Card className="w-3/4 my-[50px] m-auto bg-red-500">
                {props.children}
            </Card>
            <Footer />
        </div>
    );
};

export default Layout;