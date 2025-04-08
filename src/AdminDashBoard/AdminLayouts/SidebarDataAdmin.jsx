import { FaUsers } from "react-icons/fa6";
import { FaImages } from "react-icons/fa";
import { SiVirustotal } from "react-icons/si";
import { SiSecurityscorecard } from "react-icons/si";
import { RiLogoutBoxRFill } from "react-icons/ri";

export const SidebarDataAdmin = [
  {
    id:1,
    title:'Total Users',
    icon:<FaUsers className="text-4xl" />,
    path:'/admindashboard/totalUsers'
},
{
    id:2,
    title:'Click Images button type',
    icon:<FaImages className="text-4xl" />,
    path:'/admindashboard/clickImages'
},
{
    id:3,
    title:'Total Products in Grid modal',
    icon:<SiVirustotal className="text-4xl" />,
    path:''
},
{
    id:4,
    title:'Corrosals',
    icon:<SiSecurityscorecard  className="text-4xl"/>,
    path:''
},
{
    id:5,
    title:'Log out',
    icon:<RiLogoutBoxRFill className="text-4xl"/>,
    path:'/'
}

]