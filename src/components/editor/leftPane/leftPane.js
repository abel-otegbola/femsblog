import { FiFilePlus, FiFileText, FiFolder, FiImage, FiUsers } from "react-icons/fi";
import { AiOutlineAppstore } from "react-icons/ai";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const LeftPane = () => {
    const [isOpen, setOpen] = useState(true)
    const activeLocation = useLocation().pathname;
    const components = [
        { id: 1, title: "Dashboard", link: "dashboard", icon: <AiOutlineAppstore />},
        { id: 2, title: "Posts", link: "all-posts", icon: <FiFileText />},
        { id: 3, title: "New post", link: "new-post", icon: <FiFilePlus />},
        { id: 4, title: "Pages", link: "pages", icon: <FiFolder />},
        { id: 5, title: "Media", link: "media", icon: <FiImage />},
        { id: 6, title: "Team", link: "team", icon: <FiUsers />},
    ];


    return (
        <div className={`md:w-[15%] bg-gray-800 text-white h-screen md:relative fixed top-0 z-50 ${isOpen ? "w-[75%]" : "w-[0px] md:w-[0px]"} transition-all duration-500`}>  
            <span className="py-[17px] px-2 text-[10px] bg-white text-fuchsia-600 absolute md:top-[1px] top-[71px] -right-[27px]" onClick={() => setOpen(!isOpen)}>{isOpen ? <FaChevronLeft /> : <FaChevronRight />}</span>          
            <div className="w-full overflow-hidden">
                {
                    components.map(element => {
                        return (
                            <a key={element.id} href={element.link} className={`flex w-full items-center px-3 py-2 my-[1px] hover:bg-fuchsia-600 hover:text-white ${activeLocation.replace("/admin/","") === element.link ? "bg-fuchsia-600 text-white": ""}`}>
                                <span className="mr-3">{element.icon}</span>
                                <p
                                    className="border-white-500/50 my-1 w-full text-sm cursor-pointer" 
                                    id={element.title} 
                                >{element.title}</p>
                            </a>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default LeftPane;