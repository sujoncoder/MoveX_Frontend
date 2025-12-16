import { useLocation, Link } from 'react-router-dom';
import UserInfo from "../dashboard/UserInfo";


const DashboardHeaderLayout = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    return (
        <div>
            <div className="flex justify-between items-center">
                {/* BREADCRUMB */}
                <div className="text-lg font-medium text-slate-600 text-center md:text-left flex-1 md:flex-none">
                    {pathnames.length > 0 ? (
                        pathnames.map((name, index) => {
                            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                            const isLast = index === pathnames.length - 1;
                            return (
                                <span key={name}>
                                    {index > 0 && ' / '}
                                    {isLast ? (
                                        <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
                                    ) : (
                                        <Link to={routeTo} className="hover:underline">
                                            {name.charAt(0).toUpperCase() + name.slice(1)}
                                        </Link>
                                    )}
                                </span>
                            );
                        })
                    ) : (
                        <span>Dashboard</span>
                    )}
                </div>

                {/* USER INFO */}
                <div className="flex items-center gap-3">
                    <UserInfo />
                </div>
            </div>
        </div>
    );
};

export default DashboardHeaderLayout;