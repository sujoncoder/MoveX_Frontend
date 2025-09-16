import { IconUser, IconBike, IconHome } from "@tabler/icons-react";


export const stats = [
    {
        icon: <IconUser className="h-8 w-8 text-emerald-600" />,
        value: 150,
        suffix: "k+",
        label: "Registered Merchant",
    },
    {
        icon: <IconBike className="h-8 w-8 text-emerald-600" />,
        value: 10,
        suffix: "k+",
        label: "Delivery Man",
    },
    {
        icon: <IconHome className="h-8 w-8 text-emerald-600" />,
        value: 500,
        suffix: "+",
        label: "Delivery Point",
    },
];