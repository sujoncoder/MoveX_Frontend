import SearchInputForm from "../dashboard/SearchInputForm";
import profileIcon from "../../assets/images/profile.jpg";
import BellSvg from "../svg/BellSvg";
import MailSvg from "../svg/MailSvg";
import { useState } from "react";
import ProfileMenu from "../dashboard/ProfileMenu";


const DashboardHeader = () => {
    const [isProfileClick, setIsProfileClick] = useState<boolean>(false);

    return (
        <div className="bg-black/20 rounded-r-xl p-5 shadow flex justify-between items-center">
            {/* SEARCH FORM */}
            < SearchInputForm />

            {/* ICON + PROFILE */}
            <div className="flex gap-5 items-center" >
                <div className="bg-white/50 p-1 rounded-full">
                    <MailSvg />
                </div>

                <div className="bg-white/50 p-1 rounded-full">
                    <BellSvg />
                </div>

                <div className="relative">
                    <img
                        onClick={() => setIsProfileClick(!isProfileClick)}
                        className="w-10 h-10 border-2 border-dotted border-neutral-500 rounded-full cursor-pointer active:scale-90 transition-all"
                        src={profileIcon}
                        alt="Profile-Icon"
                    />

                    <div
                        className="absolute top-10 right-5">
                        {isProfileClick && <ProfileMenu />}
                    </div>
                </div>

            </div >
        </div>
    );
};
export default DashboardHeader;