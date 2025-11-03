import UserInfo from "../dashboard/UserInfo";


const DashboardHeaderLayout = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                {/* MENU ICON*/}
                <h1 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold font-mono text-slate-600 text-center md:text-left flex-1 md:flex-none">
                    Welcome Back!
                </h1>

                {/* USER INFO */}
                <div className="flex items-center gap-3">
                    <UserInfo />
                </div>
            </div>
        </div>
    );
};

export default DashboardHeaderLayout;