import Search from "../search/search";
import logo from "../../img/logo.png"

const Topbar = () => {
    return (
        <div className="flex flex-col justify-center items-center mb-5">
            <div className="flex flex-col items-center pt-5">
                <img src={logo} className="mb-2" alt="femsblog logo" width="30px"/>
                <h3 className="font-heading text-sky-400">FEMSBLOG</h3>
            </div>
            <div className="my-6">
                <Search />
            </div>
            <nav>
                <ul className="flex items-center">
                    <li><a href="/" className="p-2 mx-2 hover:text-fuchsia-500">Home</a></li>
                    <li><a href="/" className="p-2 mx-2 hover:text-fuchsia-500">About</a></li>
                    <li><a href="/" className="p-2 mx-2 hover:text-fuchsia-500">Categories</a></li>
                    <li><a href="/" className="p-2 mx-2 hover:text-fuchsia-500">Blogs</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Topbar;