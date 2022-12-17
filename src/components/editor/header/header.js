import { FaDesktop, FaMobileAlt, FaTabletAlt } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

const EditorHeader = ({ handlePublish }) => {
    return (
        <div className="flex bg-slate-100 items-center px-[3%] py-1 justify-between">

            <ul className="flex items-center">
                <div className="flex items-center font-bold text-md text-fuchsia-700 mr-10"><FiUser className="p-1 rounded-full bg-slate-400 text-white text-2xl mr-2"/>Admin</div>
                <li className="px-3 py-1 hover:text-white hover:bg-fuchsia-600 rounded cursor-pointer">Content</li>
                <li className="px-3 py-1 hover:text-white hover:bg-fuchsia-600 rounded cursor-pointer">Meta</li>
                <li className="px-3 py-1 hover:text-white hover:bg-fuchsia-600 rounded cursor-pointer">SEO</li>

            </ul>

            <ul className="md:flex items-center hidden">
                <li className="px-3 py-2 border hover:bg-fuchsia-600 hover:text-white hover:rounded cursor-pointer"><FaDesktop /></li>
                <li className="px-3 py-2 border hover:bg-fuchsia-600 hover:text-white hover:rounded cursor-pointer"><FaTabletAlt /></li>
                <li className="px-3 py-2 border hover:bg-fuchsia-600 hover:text-white hover:rounded cursor-pointer"><FaMobileAlt /></li>
            </ul>

            <button className="bg-fuchsia-600 text-white px-5 py-2 rounded hover:bg-fuchsia-700" onClick={() => handlePublish()}>Publish</button>
        </div>
    )
}

export default EditorHeader;