import { FaSearch } from "react-icons/fa";

const Search = () => {
    return (
        <div className="flex items-center rounded p-1 hover:border-fuchsia-200 border-2">
            <input className="flex-1 border-none py-2 px-3 outline-none" placeholder="Search blogs..." />
            <button className="bg-fuchsia-500 rounded py-3 px-4 text-white hover:bg-fuchsia-600"><FaSearch /></button>
        </div>
    )
}
export default Search;