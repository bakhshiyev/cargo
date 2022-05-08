import { useState } from "react";
import { NavLink } from "react-router-dom";

import BalanceIcon from "../icons/BalanceIcon";
import PackagesIcon from "../icons/PackagesIcon";
import Location from "../icons/Location";
import Card from "../ui/Card";

import styles from './Styles.module.css';

const UserBar = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <Card className="flex w-3/4 m-auto">
            <div className="basis-1/2 flex">
                <div className="h-[150px] w-[150px] rounded-full bg-top bg-[url('https://upload.wikimedia.org/wikipedia/commons/c/c3/Emmanuel_Macron_%28cropped%29.jpg')] rounded w-full h-full"></div>
                <div className="basis-1/2 flex flex-col justify-center p-4">
                    <h2 className="font-bold">Emmanuel Macron</h2>
                    <h2 className="font-semibold">MYCARGO-123456789</h2>
                </div>
            </div>
            <div className="basis-1/2 flex justify-evenly items-center">
                <NavLink to='/addresses' className={navData => { return navData.isActive ? styles.active : '' }}>
                    <Card className='flex font-semibold items-center bg-transparent hover:bg-yellow-500 transition-colors p-2'>
                        <Location />addresses
                    </Card>
                </NavLink>
                <NavLink to='/packages' className={navData => { return navData.isActive ? styles.active : '' }}>
                    <Card className='flex font-semibold items-center bg-transparent hover:bg-yellow-500 transition-colors p-2'>
                        <PackagesIcon />packages
                    </Card>
                </NavLink>
                <NavLink to='/balance' className={navData => { return navData.isActive ? styles.active : '' }}>
                    <Card className='flex font-semibold items-center bg-transparent hover:bg-yellow-500 transition-colors p-2'>
                        <BalanceIcon />balance
                    </Card>
                </NavLink>
                <NavLink to='/temperature' className={navData => { return navData.isActive ? styles.active : '' }}>
                    <Card className='flex font-semibold items-center bg-transparent hover:bg-yellow-500 transition-colors p-2'>
                        <BalanceIcon />temperature  
                    </Card>
                </NavLink>
            </div>
        </Card>
    );
};

export default UserBar;