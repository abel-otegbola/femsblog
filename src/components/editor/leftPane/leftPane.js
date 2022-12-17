import { FiFilePlus, FiFileText, FiFolder, FiImage, FiUsers } from "react-icons/fi";
import { AiOutlineAppstore } from "react-icons/ai";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const LeftPane = () => {
    const [isOpen, setOpen] = useState(false)
    const components = [
        { id: 1, title: "Dashboard", icon: <AiOutlineAppstore />},
        { id: 2, title: "Posts", icon: <FiFileText />},
        { id: 3, title: "New post", icon: <FiFilePlus />},
        { id: 4, title: "Pages", icon: <FiFolder />},
        { id: 5, title: "Media", icon: <FiImage />},
        { id: 6, title: "Team", icon: <FiUsers />},
    ];

    return (
        <div className={`md:w-[15%] bg-slate-50 h-screen md:relative fixed z-50 ${isOpen ? "w-[75%]" : "w-[0px] md:w-[0px]"} transition-all duration-500`}>  
            <span className="p-[10px] text-[10px] bg-slate-200 absolute top-[2px] -right-[32px]" onClick={() => setOpen(!isOpen)}>{isOpen ? <FaChevronLeft /> : <FaChevronRight />}</span>          
            <div className="w-full overflow-hidden">
                {
                    components.map(element => {
                        return (
                            <div key={element.id} className="flex w-full items-center px-3 py-2 hover:bg-fuchsia-600 hover:text-white">
                                <span className="mr-3">{element.icon}</span>
                                <p
                                    className="border-white-500/50 my-1 w-full text-sm cursor-pointer" 
                                    id={element.title} 
                                >{element.title}</p>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default LeftPane;