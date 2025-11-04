import profile from '../assets/images/nimek.jpg'
import { Link } from "react-router";

export const GoToProfile = () => {
    return (
        <>
        <Link to="/profile">
        <div className='w-12 h-12 flex items-center ml-auto rounded-full border border-black shadow-[8px_8px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 transition cursor-pointer'>
            <img className='w-full h-full rounded-full'
            src={profile} alt="profile" />
        </div>
            </Link>;
        </>
    )
}