const SideBarLink = ({ link }) => {
    return (
        <a href={`/categories/${link}`} className="flex items-center p-4 my-1 rounded hover:bg-slate-100 hover:text-fuchsia-600 cursor-pointer border border-gray-100">
            {link}
        </a>
    )
}

export default SideBarLink;