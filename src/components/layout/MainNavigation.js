import User from '../icons/User';
import Menu from '../icons/Menu';

const MainNavigation = () => {
    return (
        <div className='flex h-[60px] bg-[#351dab] text-white items-center'>
            <h1 className='font-bold basis-11/12 p-5'>MyCargo</h1>
            <nav className='flex basis-1/12 justify-evenly'>
                <div className='w-4'><User /></div>
                <div className='w-4'><Menu /></div>
            </nav>
        </div>
    );
};

export default MainNavigation;