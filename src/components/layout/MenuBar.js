import { NavLink } from "react-router-dom";

const MenuBar = (props) => {
    return (
        <div className="bg-yellow-500 text-black font-semibold text-center flex absolute top-0 bottom-0 left-0 right-0">
            <div className="basis-3/4 bg-black" onClick={props.onClick}></div>
            <div className="basis-1/4 flex flex-col" onClick={props.onClick}>
                <NavLink to='/tariff'>Tariflər</NavLink>
                <NavLink to='/news'>Xəbərlər</NavLink>
                <NavLink to='/contact'>Əlaqə</NavLink>
            </div>
        </div>
    );
};

export default MenuBar;