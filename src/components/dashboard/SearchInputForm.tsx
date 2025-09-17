import { IconSearch } from '@tabler/icons-react';
import { motion } from "motion/react";
import { useRef, useState } from 'react';


const SearchInputForm = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleIconClick = () => {
        setIsExpanded(true);
        inputRef.current?.focus();
    };

    return (
        <form
            onClick={handleIconClick}
            className="relative">
            <motion.input
                ref={inputRef}
                type="text"
                placeholder="Search..."
                className="rounded-l-2xl shadow bg-white rounded-full py-2 pl-10 pr-2 focus:outline-none text-slate-500 border-2"
                initial={{ width: 40 }}
                animate={{ width: isExpanded ? 250 : 40 }}
                transition={{ type: "spring", stiffness: 100, damping: 25 }}
                onBlur={() => setIsExpanded(false)}
            />

            <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-300 w-6 h-6 cursor-pointer" />
        </form>
    )
}

export default SearchInputForm