import { FiUser } from "react-icons/fi";
import { formatDate } from "../../../utils/helpers/formatDate"
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"


const HeroBlog = ({ blog }) => {

    return (
        <a href={`/post/${blog.slug}`} className="md:mx-2 md:mb-2 mb-2 sm:mb-2 p-2 sm:flex block bg-white rounded relative">
            {<img src={blog.imgUrl.url} className="rounded sm:h-auto h-auto sm:w-[40%] w-[100%] object-cover" alt={blog.imgUrl.title} /> || <Skeleton height={200} />}
            <div className="py-3 px-3 sm:w-[60%] w-[100%]">
                <a href={`/categories/${blog.category}`} className={`py-2 rounded text-gray-500 text-[9px] font-semibold uppercase hover:text-fuchsia-500`}>{blog.category || <Skeleton />}</a>
                
                <h1 className="font-heading text-xl font-bold my-3">{blog.title || <Skeleton />}</h1>
                <p className="">
                    <p className="text-gray-400 text-xs py-2">
                    {
                        formatDate(blog.createdAt).map((item, i) => { return (
                            <span key={i} className="mr-1">{item}</span>
                        ) }) || <Skeleton count={3} />
                    }
                    </p>
                </p>
                <p className="mb-4">
                    {
                    (blog.tags.map((tag, i) => {
                        return <a href={`/tags/${tag.replace(" ", "-")}`} key={i} className={`py-1 px-2 mr-2 rounded bg-gray-100 text-gray-600 uppercase text-[8px] hover:bg-fuchsia-500 hover:text-white`}>{tag}</a>
                    })) || <Skeleton count={3} />
                }</p>
                <p>{blog.summary || <Skeleton height={100} />}</p>

                <div className="flex items-center text-gray-400 text-md mr-10 mt-5"><FiUser className="p-1 rounded-full bg-gray-300 text-white text-2xl mr-2"/>{blog.author || <Skeleton />}</div>
            </div>
        </a>
    )
}

export default HeroBlog;
