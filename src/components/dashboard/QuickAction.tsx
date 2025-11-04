import { Link } from "react-router";

const QuickAction = ({ to, label }: { to: string; label: string }) => (
    <Link
        to={to}
        className="px-4 py-2 bg-blue-500/10 text-blue-600 rounded-lg border hover:bg-blue-500/15 transition"
    >
        {label}
    </Link>
);

export default QuickAction;