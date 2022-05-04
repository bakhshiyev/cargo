import Card from '../ui/Card';
import Edit from '../icons/Edit';
import LogOut from '../icons/LogOut';

const Profile = () => {
    return (
        <div className='flex flex-col bg-red-500 p-4'>
            <Card className=''><Edit />edit profile</Card>
            <Card><LogOut />logout</Card>
        </div>
    );
};

export default Profile;