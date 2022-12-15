const SideBarLink = ({ link }) => {
    return (
        <div className="flex items-center p-4 my-2 rounded hover:bg-slate-100 hover:text-fuchsia-600 cursor-pointer">
            <div className="mr-4 text-lg">{link.icon}</div>
            <p>{link.title}</p>
        </div>
    )
}

export default SideBarLink;