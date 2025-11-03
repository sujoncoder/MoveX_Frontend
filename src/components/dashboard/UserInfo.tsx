
const UserInfo = () => {
    return (
        <div className="flex items-center gap-2">
            <img
                src="https://i.ibb.co.com/pvTd08sn/Whats-App-Image-2025-07-28-at-19-35-44-2066225f.jpg"
                alt="profile-pic"
                className='w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-slate-700 bg-white'
            />

            <div className='hidden sm:flex flex-col'>
                <span className="font-medium text-slate-500">Sujon Sheikh</span>
                <span className="text-sm text-slate-500">sujonsheikh@gmail.com</span>
            </div>
        </div>
    )
};

export default UserInfo;