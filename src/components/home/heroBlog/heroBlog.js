import { FiBookmark, FiUser } from "react-icons/fi";
import { FaBookmark } from "react-icons/fa";
import { formatDate } from "../../../utils/helpers/formatDate"


const HeroBlog = ({ blog }) => {

    return (
        <a href={`/post/${blog.slug}`} className="md:mx-2 md:mb-2 mb-2 sm:mb-2 p-2 sm:flex block bg-white rounded relative">
            {
                blog.liked ? <FaBookmark  className="absolute right-5 top-5 text-red-500"/>
                :  <FiBookmark  className="absolute right-5 top-5"/>
            }
            <img src={blog.imgUrl.url} className="rounded sm:h-auto h-auto sm:w-[40%] w-[100%] object-cover" alt={blog.imgUrl.title} />
            <div className="py-3 px-3 sm:w-[60%] w-[100%]">
                <a href={`/categories/${blog.category}`} className={`py-2 rounded text-gray-500 text-xs font-semibold uppercase hover:text-fuchsia-500`}>{blog.category}</a>
                
                <h1 className="font-heading text-xl font-bold my-3">{blog.title}</h1>
                <p className="">
                    <p className="text-gray-400 py-2">
                    {
                        formatDate(blog.createdAt).map((item, i) => { return (
                            <span key={i} className="mr-1">{item}</span>
                        ) })
                    }
                    </p>
                </p>
                <p className="text-lg text-gray-600 mb-3">{blog.summary}</p>
                {
                    blog.tags.map((tag, i) => {
                        return <a href={`/tags/${tag.replace(" ", "-")}`} key={i} className={`py-2 mr-4 rounded uppercase text-xs hover:bg-fuchsia-500 hover:text-white`}>{tag}</a>
                    })
                }
                <div className="flex items-center text-gray-400 text-md mr-10 mt-5"><FiUser className="p-1 rounded-full bg-gray-300 text-white text-2xl mr-2"/>{blog.author}</div>
            </div>
        </a>
    )
}

export default HeroBlog;
