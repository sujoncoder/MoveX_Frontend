import { LogOutIcon, PersonStanding } from "lucide-react";
import { Link } from "react-router";


const Setting = () => {
    return (
        <div className="space-y-2">
            <Link
                to="/dashboard/profile"
                className="flex items-center gap-2 p-2.5 bg-green-500/10 rounded-lg text-slate-600 hover:bg-green-500/20 transition-all duration-300"
            >
                <PersonStanding className="group-hover:scale-125 duration-300 text-green-600" />
                <span>Profile</span>
            </Link>


            <Link
                to="/dashboard/logout"
                className="flex items-center gap-2 p-2.5 bg-red-500/10 rounded-lg text-slate-600 hover:bg-red-500/20 transition-all duration-300"
            >
                <LogOutIcon className="group-hover:scale-125 duration-300 text-red-500" />
                <span className="text-red-500">Logout</span>
            </Link>
        </div>
    );
};

export default Setting;