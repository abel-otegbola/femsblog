import { FaDesktop, FaMobileAlt, FaTabletAlt } from "react-icons/fa";

const EditorHeader = ({ handlePublish }) => {
    return (
        <div className="flex bg-gray-600 text-white items-center px-[3%] py-1 justify-between">

            <ul className="flex items-center">
                <li className="px-3 py-1 hover:text-white hover:bg-fuchsia-600 rounded cursor-pointer">Content</li>
                <li className="px-3 py-1 hover:text-white hover:bg-fuchsia-600 rounded cursor-pointer">Meta</li>
                <li className="px-3 py-1 hover:text-white hover:bg-fuchsia-600 rounded cursor-pointer">SEO</li>

            </ul>

            <ul className="md:flex items-center hidden">
                <li className="px-3 py-2 border hover:bg-fuchsia-600 hover:text-white cursor-pointer"><FaDesktop /></li>
                <li className="px-3 py-2 border hover:bg-fuchsia-600 hover:text-white cursor-pointer"><FaTabletAlt /></li>
                <li className="px-3 py-2 border hover:bg-fuchsia-600 hover:text-white cursor-pointer"><FaMobileAlt /></li>
            </ul>

            <button className="bg-fuchsia-600 text-white px-5 py-2 rounded hover:bg-fuchsia-700" onClick={() => handlePublish()}>Publish</button>
        </div>
    )
}

export default EditorHeader;