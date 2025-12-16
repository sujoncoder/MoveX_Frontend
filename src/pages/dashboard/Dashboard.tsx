import { useAuth } from "@/hooks/useAuth";



const Dashboard = () => {
    const currentUser = useAuth();
    console.log(currentUser);

    return (
        <div>

        </div>
    )
}

export default Dashboard;