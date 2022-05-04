import { useState, useContext } from 'react';
import AuthContext from '../../store/auth-context';

import User from '../icons/User';
import Menu from '../icons/Menu';
import Profile from '../modals/Profile';

const MainNavigation = () => {
    const authCtx = useContext(AuthContext);
    const [showModal, setShowModal] = useState(false);

    const profileHandler = () => {
        setShowModal((prevState) => { return !prevState });
    };

    return (
        <div className='flex h-[60px] bg-[#351dab] text-white items-center'>
            <h1 className='font-bold basis-10/12 p-5'>MyCargo</h1>
            {!authCtx.isLoggedIn &&
                <nav className='flex basis-2/12 justify-evenly'>
                    <div className='w-4'><button onClick={authCtx.onLogin}>Login</button></div>
                    <div className='w-4'>Register</div>
                </nav>
            }
            {authCtx.isLoggedIn &&
                <nav className='flex basis-2/12 justify-evenly'>
                    <div className='w-4 cursor-pointer' onClick={profileHandler}><User /></div>
                    {showModal && <Profile />}
                    <div className='w-4 cursor-pointer'><Menu /></div>
                </nav>
            }
        </div>
    );
};

export default MainNavigation;