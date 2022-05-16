import { useState } from "react";
import { NavLink } from "react-router-dom";

import BalanceIcon from "../icons/BalanceIcon";
import PackagesIcon from "../icons/PackagesIcon";
import Location from "../icons/Location";
import Card from "../ui/Card";

import styles from './Styles.module.css';
import Store from "../icons/Store";

const UserBar = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <Card className="flex w-3/4 m-auto">
            <div className="basis-1/2 flex">
                <div className="basis-1/2 h-[150px] w-[150px] rounded bg-center bg-[url('https://startupheretoronto.com/wp-content/uploads/2019/08/headshot-chris-hadfield-400.jpg')]"></div>
                <div className="basis-1/2 flex flex-col justify-center p-4">
                    <h2 className="font-bold">Karim Karimov</h2>
                    <h2 className="font-semibold">MYCARGO-123456789</h2>
                </div>
            </div>
            <div className="basis-1/2 flex justify-evenly items-center">
                <NavLink to='/addresses' className={navData => { return navData.isActive ? styles.active : '' }}>
                    <Card className='flex font-semibold items-center bg-transparent hover:bg-yellow-500 transition-colors p-2'>
                        <Location />ünvanlar
                    </Card>
                </NavLink>
                <NavLink to='/packages' className={navData => { return navData.isActive ? styles.active : '' }}>
                    <Card className='flex font-semibold items-center bg-transparent hover:bg-yellow-500 transition-colors p-2'>
                        <PackagesIcon />bağlamalar
                    </Card>
                </NavLink>
                <NavLink to='/balance' className={navData => { return navData.isActive ? styles.active : '' }}>
                    <Card className='flex font-semibold items-center bg-transparent hover:bg-yellow-500 transition-colors p-2'>
                        <BalanceIcon />balans
                    </Card>
                </NavLink>
                <NavLink to='/temperature' className={navData => { return navData.isActive ? styles.active : '' }}>
                    <Card className='flex font-semibold items-center bg-transparent hover:bg-yellow-500 transition-colors p-2'>
                        <Store />anbar  
                    </Card>
                </NavLink>
            </div>
        </Card>
    );
};

export default UserBar;