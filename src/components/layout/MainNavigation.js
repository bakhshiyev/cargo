import ReactDOM from 'react-dom/client';
import { useState, useContext } from 'react';
import AuthContext from '../../store/auth-context';

import User from '../icons/User';
import Menu from '../icons/Menu';
import Profile from '../modals/Profile';
import { NavLink } from 'react-router-dom';
import MenuBar from './MenuBar';

const MainNavigation = () => {
    const authCtx = useContext(AuthContext);
    const [showModal, setShowModal] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const profileHandler = () => {
        setShowModal((prevState) => { return !prevState });
    };

    const showMenuHandler = () => {
        setShowMenu(prevState => !prevState);
    };

    const closeMenuHandler = () => {
        setShowMenu(false);
    };

    return (
        <div className='flex h-[60px] bg-[#351dab] text-white items-center'>
            <NavLink to='/' className='font-bold basis-10/12 p-5'>MyCargo</NavLink>
            {!authCtx.isLoggedIn &&
                <nav className='flex basis-2/12 justify-evenly'>
                    <div><NavLink to='/register'>Get Started</NavLink></div>
                    <div className='w-4 cursor-pointer' onClick={showMenuHandler}><Menu /></div>
                    {showMenu && <MenuBar onClick={closeMenuHandler}/>}
                </nav>
            }
            {authCtx.isLoggedIn &&
                <nav className='flex basis-2/12 justify-evenly'>
                    <div className='w-4 cursor-pointer' onClick={profileHandler}><User /></div>
                    {showModal && <Profile />}
                    <div className='w-4 cursor-pointer' onClick={showMenuHandler}><Menu /></div>
                    {showMenu && <MenuBar onClick={closeMenuHandler}/>}
                </nav>
            }
        </div>
    );
};

export default MainNavigation;