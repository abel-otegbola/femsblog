import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className={`flex items-center rounded flex-1 p-[2px] ${isOpen ? "border-gray-100 hover:border-fuchsia-200" : ""} border border-white`}>
            <input className={`${isOpen ? "w-[200px] opacity-100" : "w-0 opacity-0"} md:w-auto md:opacity-100 flex-1 border-none py-1 px-3 outline-none transition-all duration-500`} placeholder="Search blogs..." />
            <button className={`${isOpen ? "bg-fuchsia-500" : "bg-gray-50 border border-gray-100 text-black"} rounded py-[12px] px-3 text-white hover:bg-fuchsia-600 hover:text-white`} onClick={() => setOpen(!isOpen)}><FaSearch /></button>
        </div>
    )
}
export default Search;