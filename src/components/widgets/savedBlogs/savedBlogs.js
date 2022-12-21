import { FiChevronRight } from "react-icons/fi";

const SavedBlogs = ({ blogs }) => {
    return (
        <div>
            <h1 className="font-bold text-md p-2 bg-slate-100">SAVED POSTS</h1>
            {
                blogs.map(blog => {
                    return (
                        <a key={blog.id} href={`post/${blog.slug}`} className="flex justify-between items-center my-6 text-sm">
                            <img src={blog.imgUrl} alt={blog.title} className="w-14 h-14 shadow-xl rounded object-cover"/>
                            <div className="mx-2 flex-1">
                                <p className="font-bold">{blog.title}</p>
                                <p>{blog.summary.substring(0, 30)}</p>
                            </div>
                            <FiChevronRight />
                        </a>
                    )
                })
            }
        </div>
    )
}

export default SavedBlogs;