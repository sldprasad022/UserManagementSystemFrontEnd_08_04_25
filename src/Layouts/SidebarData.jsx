import { IoHome } from "react-icons/io5";
import { TbArrowRoundaboutRight } from "react-icons/tb";
import { IoMdContacts } from "react-icons/io";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { FaUsers } from "react-icons/fa6";

export const data =[
    {
        id:1,
        title:'Home',
        icon:<IoHome className="text-4xl" />,
        path:''
    },
    {
        id:2,
        title:'About us',
        icon:<TbArrowRoundaboutRight className="text-4xl" />,
        path:'/userdashboard/aboutUs'
    },
    {
        id:3,
        title:'Corrosauls',
        icon: <IoMdContacts className="text-4xl" />,
        path:''
    },
    {
        id:4,
        title:'Product',
        icon:<MdOutlineProductionQuantityLimits className="text-4xl" />,
        path:'/userdashboard/productsimages'
    },
    {
        id:5,
        title:'Allusersdata',
        icon:<FaUsers className="text-4xl" />,
        path:'/userdashboard/allusersdata'
    },
    {
        id:6,
        title:'Log out',
        icon:<TbLogout />,
        path:'/'
    }
]
