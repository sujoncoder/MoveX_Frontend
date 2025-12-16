import { User, Bike, Home } from "lucide-react";


export const stats = [
    {
        icon: <User className="h-8 w-8 text-emerald-600" />,
        value: 150,
        suffix: "k+",
        label: "Registered Merchant",
    },
    {
        icon: <Bike className="h-8 w-8 text-emerald-600" />,
        value: 10,
        suffix: "k+",
        label: "Delivery Man",
    },
    {
        icon: <Home className="h-8 w-8 text-emerald-600" />,
        value: 500,
        suffix: "+",
        label: "Delivery Point",
    },
];