import { FaDesktop, FaMobileAlt, FaTabletAlt } from "react-icons/fa";

const EditorHeader = () => {
    return (
        <div className="flex bg-slate-100 items-center px-6 py-1 justify-between">

            <ul className="flex items-center">
                <div className="font-bold text-lg text-fuchsia-700 mr-10">EditX</div>
                <li className="px-3 py-1 hover:bg-slate-200 hover:text-fuchsia-600 rounded cursor-pointer">File</li>
                <li className="px-3 py-1 hover:bg-slate-200 hover:text-fuchsia-600 rounded cursor-pointer">Edit</li>
                <li className="px-3 py-1 hover:bg-slate-200 hover:text-fuchsia-600 rounded cursor-pointer">View</li>
                <li className="px-3 py-1 hover:bg-slate-200 hover:text-fuchsia-600 rounded cursor-pointer">Help</li>

            </ul>

            <ul className="flex items-center">
                <li className="px-3 py-2 border hover:bg-fuchsia-700 hover:text-white hover:rounded cursor-pointer"><FaDesktop /></li>
                <li className="px-3 py-2 border hover:bg-fuchsia-700 hover:text-white hover:rounded cursor-pointer"><FaTabletAlt /></li>
                <li className="px-3 py-2 border hover:bg-fuchsia-700 hover:text-white hover:rounded cursor-pointer"><FaMobileAlt /></li>
            </ul>

            <button className="bg-fuchsia-600 text-white px-5 py-2 rounded hover:bg-fuchsia-700">Publish</button>
        </div>
    )
}

export default EditorHeader;