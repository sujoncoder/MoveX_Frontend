import { useRef, useState } from "react";
import { motion } from "motion/react";
import profileIcon from "../../assets/images/profile.jpg";
import BellSvg from "../svg/BellSvg";
import MailSvg from "../svg/MailSvg";
import { IconSearch } from '@tabler/icons-react';


const DashboardHeader = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleIconClick = () => {
        setIsExpanded(true);
        inputRef.current?.focus();
    };

    return (
        <div className="bg-black/20 rounded-r-xl p-5 shadow flex justify-between items-center">
            {/* SEARCH FORM */}
            <form
                onClick={handleIconClick}
                className="relative">
                <motion.input
                    ref={inputRef}
                    type="text"
                    placeholder="Search..."
                    className="rounded-l-2xl shadow bg-white rounded-full py-2 pl-10 pr-2 focus:outline-none text-slate-500 border"
                    initial={{ width: 40 }}
                    animate={{ width: isExpanded ? 250 : 40 }}
                    transition={{ type: "spring", stiffness: 100, damping: 25 }}
                    onBlur={() => setIsExpanded(false)}
                />

                <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-300 w-6 h-6 cursor-pointer" />
            </form>

            {/* ICON + PROFILE */}
            <div className="flex gap-5 items-center">
                <div className="bg-white/50 p-1 rounded-full">
                    <MailSvg />
                </div>

                <div className="bg-white/50 p-1 rounded-full">
                    <BellSvg />
                </div>

                <img
                    className="w-10 h-10 border-2 border-dotted border-neutral-500 rounded-full cursor-pointer"
                    src={profileIcon}
                    alt="Profile-Icon"
                />
            </div>
        </div >
    );
};

export default DashboardHeader;