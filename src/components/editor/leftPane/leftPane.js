import { FiBold, FiImage, FiLink, FiType, FiVideo } from "react-icons/fi";
import { BsCursorText, BsInputCursor } from "react-icons/bs";
import { TbRectangle } from "react-icons/tb";

const LeftPane = () => {
    const handleDrag = (e) => {
        e.dataTransfer.setData("Text", e.target.id)
    }
    const components = [
        { id: 1, title: "heading", icon: <FiBold />},
        { id: 2, title: "text", icon: <FiType />},
        { id: 3, title: "span", icon: <BsCursorText />},
        { id: 4, title: "input", icon: <BsInputCursor />},
        { id: 5, title: "link", icon: <FiLink />},
        { id: 6, title: "button", icon: <TbRectangle />},
        { id: 7, title: "image", icon: <FiImage />},
        { id: 8, title: "video", icon: <FiVideo />},
    ];

    return (
        <div className="w-[15%] bg-slate-50">            
            <p className="p-3 border border-white border-b-slate-200 bg-slate-100">Components</p>
            <div className="w-full">
                {
                    components.map(element => {
                        return (
                            <div key={element.id} className="flex w-full items-center px-3 py-2 hover:bg-fuchsia-600 hover:text-white">
                            <span className="mr-3">{element.icon}</span>
                            <p
                                className="border-white-500/50 my-1 w-full text-sm cursor-pointer" 
                                id={element.title} 
                                draggable="true" 
                                onDragStart={(e) => handleDrag(e)} 
                                onTouchStart={(e) => handleDrag(e)}
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