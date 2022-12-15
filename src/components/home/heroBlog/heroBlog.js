import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";


const HeroBlog = ({ blog }) => {
    const colors = ["#ff0000", "#ffa500"]

    return (
        <div className="md:m-2 md:my-2 my-2 sm:mb-2 mb-12 p-2 sm:flex block bg-white rounded relative">
            {
                blog.liked ? <FaHeart  className="absolute right-5 top-5 text-red-500"/>
                :  <FiHeart  className="absolute right-5 top-5"/>
            }
            <img src={blog.imgUrl} className="rounded sm:h-60 h-80 sm:w-[40%] w-[100%] object-cover" alt="blog" />
            <div className="py-3 px-2 sm:w-[60%] w-[100%]">
                <p className="text-fuchsia-500 py-2">{blog.createdAt}</p>
                <h1 className="font-heading text-xl font-bold">{blog.title}</h1>
                <p className="my-2">
                    <span className={`py-1 px-2 mr-2 rounded bg-[#0000ff]/[.1] text-[#0000ff] text-sm`}>{blog.category}</span>
                    {
                    blog.tags.map((tag, i) => {
                        return <span key={i} className={`py-1 px-2 mr-2 rounded bg-[${colors[i]}]/[.1] text-[${colors[i]}] text-sm`}>{tag}</span>
                    })
                }</p>
                <p>{blog.summary}</p>
            </div>
        </div>
    )
}

export default HeroBlog;