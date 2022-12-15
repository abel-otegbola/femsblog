import { Link } from "react-router-dom";

const SidebarOption = ({ active, title, icon, to }) => {
    return (
        <Link to={to} className={`flex items-center p-4 px-6 hover:bg-secondary ${active ? "bg-secondary" : ""}`}>
            <span className="p-3">{icon}</span>
            <h3 className="text-md">{title}</h3>
        </Link>
    )
}

export default SidebarOption;