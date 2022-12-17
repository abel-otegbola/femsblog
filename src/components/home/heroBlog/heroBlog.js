import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { formatDate } from "../../../utils/helpers/formatDate"


const HeroBlog = ({ blog }) => {

    return (
        <a href={`post/${blog.slug}`} className="md:m-2 md:my-2 my-2 sm:mb-2 mb-12 p-2 sm:flex block bg-white rounded relative">
            {
                blog.liked ? <FaHeart  className="absolute right-5 top-5 text-red-500"/>
                :  <FiHeart  className="absolute right-5 top-5"/>
            }
            <img src={blog.imgUrl} className="rounded sm:h-60 h-80 sm:w-[40%] w-[100%] object-cover" alt="blog" />
            <div className="py-3 px-2 sm:w-[60%] w-[100%]">
                <p className="text-fuchsia-500 py-2">
                    {
                        formatDate(blog.createdAt).map((item, i) => { return (
                            <span key={i} className="mr-2">{item}</span>
                        ) })
                    }
                </p>
                <h1 className="font-heading text-xl font-bold">{blog.title}</h1>
                <p className="my-2">
                    <a href={`/category/${blog.category.replace(" ", "-")}`} className={`py-1 px-2 pb-2 mr-2 rounded bg-fuchsia-100 text-fuchsia-600 text-xs hover:bg-fuchsia-500 hover:text-white`}>{blog.category}</a>
                    {
                    blog.tags.map((tag, i) => {
                        return <a href={`tag/${tag.replace(" ", "-")}`} key={i} className={`py-1 px-2 pb-2 mr-2 rounded bg-orange-100 text-red-600 text-xs hover:bg-orange-500 hover:text-white`}>{tag}</a>
                    })
                }</p>
                <p>{blog.summary}</p>
            </div>
        </a>
    )
}

export default HeroBlog;