import SideBarLink from "../sideBarLinks/sideBarLinks";import { AiOutlineAppstore } from "react-icons/ai"
import { FiHeadphones, FiTv } from "react-icons/fi";
import { FaBrain, FaDemocrat, FaDesktop, FaTree } from "react-icons/fa";

const SideBarPanel = () => {
    const links =[
        { id: 1, title: "General", icon: <AiOutlineAppstore /> },
        { id: 2, title: "Entertainment", icon: <FiTv /> },
        { id: 3, title: "Music", icon: <FiHeadphones /> },
        { id: 4, title: "Technology", icon: <FaDesktop /> },
        { id: 5, title: "Politics", icon: <FaDemocrat /> },
        { id: 6, title: "Philosophy", icon: <FaBrain /> },
        { id: 7, title: "Nature", icon: <FaTree /> },
    ]

    return (
        <div>
        <h1 className="font-bold text-md p-2 bg-slate-100">CATEGORIES</h1>
            {
                links.map(link => {
                    return (
                        <SideBarLink key={link.id} link={link} />
                    )
                })
            }
        </div>
    )
}

export default SideBarPanel;