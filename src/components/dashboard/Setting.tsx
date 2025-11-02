import { LogOutIcon, PersonStanding } from "lucide-react";
import { Link } from "react-router";


const Setting = () => {
    return (
        <div className="space-y-3">
            <Link
                to="/dashboard/profile"
                className='flex items-center gap-3 p-2.5 bg-green-500/20 rounded-lg text-slate-500 group active:bg-green-500/30'
            >
                <PersonStanding className='group-hover:scale-125 duration-300' />
                <span className='text-lg font-medium'>
                    Profile
                </span>
            </Link>


            <Link
                to="/dashboard/logout"
                className='flex items-center gap-3 p-2.5 bg-red-500/20 rounded-lg text-slate-500 group active:bg-red-500/30'
            >
                <LogOutIcon className='group-hover:scale-125 duration-300 text-red-400' />
                <span className='text-lg font-medium text-red-400'>
                    Logout
                </span>
            </Link>
        </div>
    )
};

export default Setting;