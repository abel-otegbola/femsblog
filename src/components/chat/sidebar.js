import { FiAtSign, FiMessageCircle } from "react-icons/fi";
import { FaEdit } from "react-icons/fa";
import { BsPlayFill } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import { IoChatbubblesOutline } from "react-icons/io5";
import { RiSendPlane2Line } from "react-icons/ri";
import SidebarOption from "./sidebarOptions";
import { useLocation } from "react-router-dom"

const Sidebar = () => {
    const location = useLocation().pathname;

    const links = [
        { title: "Thread", icon: <FiMessageCircle />, to: "/chat" },
        { title: "All DMs", icon: <IoChatbubblesOutline/>, to: "/chat/dms" },
        { title: "Mentions & Reactions", icon: <FiAtSign />, to: "/chat/mentions" },
        { title: "Drafts & New", icon: <RiSendPlane2Line />, to: "/chat/drafts" },
        { title: "More", icon: <HiDotsVertical />, to: "#" }
    ]
    
    const dropdowns = [
        { title: "Channels", icon: <BsPlayFill />, to: "#" },
        { title: "All DMs", icon: <BsPlayFill />, to: "#" },
        { title: "Apps", icon: <BsPlayFill />, to: "#" },
        { title: "More", icon: <HiDotsVertical />, to: "#" }
    ]

    return (
        <div className="lg:w-1/4 w-90">
            <div className="flex justify-between items-center p-4 px-6 bg-primary text-white">
                <h3 className="lg:text-xl text-md">The Zuri Redesign</h3>
                <span className="p-2 rounded-full bg-white text-gray-800"><FaEdit /></span>
            </div>

            <div>
                {
                    links.map((link, i) => {
                        return (
                            <SidebarOption key={i} title={link.title} icon={link.icon} to={link.to} active={location === link.to ? true : console.log(location)} />
                        )
                    })
                }
                <hr className="text-slate-300"/>
                {
                    dropdowns.map((link, i) => {
                        return (
                            <SidebarOption key={i} title={link.title} icon={link.icon} to={link.to} active={location === link.to ? true : console.log(location)} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar;