import SideBarLink from "../sideBarLinks/sideBarLinks";import { AiOutlineAppstore } from "react-icons/ai"
import { FiHeadphones, FiTv } from "react-icons/fi";
import { FaBrain, FaDesktop, FaTree } from "react-icons/fa";
import Tags from "../../widgets/tags/tags";
import { useEffect, useState } from "react";

const SideBarPanel = ({ blogs }) => {
    const [tags, setTags] = useState([])
    const links =[
        { id: 1, title: "General", icon: <AiOutlineAppstore /> },
        { id: 2, title: "Entertainment", icon: <FiTv /> },
        { id: 3, title: "Music", icon: <FiHeadphones /> },
        { id: 4, title: "Technology", icon: <FaDesktop /> },
        { id: 6, title: "Philosophy", icon: <FaBrain /> },
        { id: 7, title: "Nature", icon: <FaTree /> },
    ]

    useEffect(() => {
        for(let i=0; i<blogs.length; i++) {
            blogs[i].tags.forEach((tag) => {
                if(tags.indexOf(tag) < 0) {
                   setTags([...tags, tag])
                }
            })
        };
    }, [blogs, tags])


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
        
        <Tags tags={tags} />
        </div>
    )
}

export default SideBarPanel;