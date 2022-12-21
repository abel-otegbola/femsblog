const Tags = ({ tags }) => {
    return (
        <div className="">
            <h1 className="font-bold text-md p-2 bg-slate-100 w-full my-4 mt-10">TAGS</h1>
            <div className="flex flex-wrap">
                {
                    tags && tags.map((tag, i) => {
                        return (
                            <a key={i} href={`tags/${tag}`} className="px-3 py-2 border border-gray-300 my-2 mx-1 hover:bg-fuchsia-600 hover:text-white">{tag}</a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Tags;