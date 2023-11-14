
import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 border-b-2 '>
            <h6 className='text-4xl font-bold'>Knowledge Cafe</h6>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;