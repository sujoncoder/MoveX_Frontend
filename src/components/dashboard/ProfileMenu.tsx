import { authApi, useLogoutMutation } from '@/redux/features/auth.api';
import { useAppDispatch } from '@/redux/hooks';
import {
    IconOld,
    IconPaint,
    IconSettingsCode,
    IconLogout
} from '@tabler/icons-react';
import { Link, useNavigate } from 'react-router';
import { toast } from 'sonner';


const items = [
    { id: 1, label: "My Account", icon: IconOld, path: "#" },
    { id: 1, label: "Personalization", icon: IconPaint, path: "#" },
    { id: 1, label: "Setting", icon: IconSettingsCode, path: "#" },
    { id: 1, label: "Sign-out", icon: IconLogout, path: "#" },
];

const ProfileMenu = () => {
    const [logout] = useLogoutMutation();

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    // HANDLE LOGOUT
    const handleLogout = async () => {
        try {
            const result = await logout().unwrap();
            dispatch(authApi.util.resetApiState());
            if (result) { toast.success(result.message) };
            navigate("/login");
        } catch (error) {
            toast.error("Logout failed. Please try again.");
        }
    };


    return (
        <div
            className="bg-white rounded-md p-5 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">

            <div className="divide-y divide divide-indigo-50">
                {items.map((item) => {
                    if (item.label === "Sign-out") {
                        return (
                            <Link
                                onClick={handleLogout}
                                className=
                                "flex justify-center items-center space-x-3 py-1.5 text-lg bg-red-200 active:bg-red-300 text-red-500 rounded-md mt-5"
                                key={item.id}
                                to={item.path}
                            >
                                <item.icon />
                                <span>{item.label}</span>
                            </Link >
                        )
                    }

                    return (
                        <Link
                            className=
                            "flex items-center space-x-3 py-1.5 my-1 px-2 duration-500 hover:scale-105 ease-in-out transition-all text-lg hover:bg-slate-100 text-slate-500 hover:rounded-md"
                            key={item.id}
                            to={item.path}
                        >
                            <item.icon />
                            <span>{item.label}</span>
                        </Link >
                    )
                })}
            </div>
        </div >
    )
};
export default ProfileMenu;