import { IconTruck, IconCurrencyDollar, IconHeartHandshake, IconDeviceImacFilled, IconHeadphones, IconActivity } from "@tabler/icons-react";

import deliver from "../assets/icons/ecom_delivry.svg";
import pick from "../assets/icons/pick_n_drop.svg";
import packing from "../assets/icons/packeging.svg";
import warehouse from "../assets/icons/warehouse.svg";



export const services = [
    {
        icon: <IconTruck className="h-8 w-8 text-green-500" />,
        title: "Daily pickup, no limits",
        desc: "Steadfast Courier gives you the opportunity of unlimited pickup.",
    },
    {
        icon: <IconCurrencyDollar className="h-8 w-8 text-yellow-500" />,
        title: "Cash on Delivery",
        desc: "At Steadfast Courier we will collect the cash on behalf of you.",
    },
    {
        icon: <IconHeartHandshake className="h-8 w-8 text-blue-500" />,
        title: "Faster Payment Service",
        desc: "We provide multiple payment methods such as cash, Bank or Mobile Banking.",
    },
    {
        icon: <IconDeviceImacFilled className="h-8 w-8 text-purple-500" />,
        title: "Online Management",
        desc: "You can get all the information you need in your own user dashboard.",
    },
    {
        icon: <IconActivity className="h-8 w-8 text-orange-500" />,
        title: "Real-Time Tracking",
        desc: "Steadfast Courier provides a unique tracking code for your every consignments.",
    },
    {
        icon: <IconHeadphones className="h-8 w-8 text-pink-500" />,
        title: "24/7 Customer Service",
        desc: "Our Call Center Executives are always ready 24/7 to help you with your problems.",
    },
];


export const ourServices = [
    { icon: deliver, title: "Ecommerce Delivery" },
    { icon: pick, title: "Pick and Drop" },
    { icon: packing, title: "Packaging" },
    { icon: warehouse, title: "Warehousing" },
];