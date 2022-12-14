import { useContext } from "react";
import { FiUser } from "react-icons/fi";
import HeroSection from "../../components/home/heroSection/heroSection";
import { BlogsContext } from "../../context/blogsContext";
import { formatDate } from "../../utils/helpers/formatDate";

const Bookmarks = () => {
    const {blogs} = useContext(BlogsContext)


    return (
        <div className="">
            <HeroSection text={"SAVED POSTS"} />
            <div className="my-2 bg-white grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-2">
                {
                    blogs.filter(item => item.liked === true).map(blog => {
                        return ( 
                            <a href={`/post/${blog.slug}`} key={blog.id} className="md:mx-2 md:mb-2 mb-2 sm:mb-2 p-2 block bg-white rounded">
                                <img src={blog.imgUrl} className="rounded h-auto w-[100%] object-cover" alt="blog" />
                                <div className="py-3 px-3 w-[100%]">
                                    <p className="text-gray-400 py-2">
                                        {
                                            formatDate(blog.createdAt).map((item, i) => { return (
                                                <span key={i} className="mr-1">{item}</span>
                                            ) })
                                        }
                                    </p>
                                    <h1 className="font-heading text-xl font-bold">{blog.title}</h1>
                                    <p className="my-4">
                                        <a href={`/categories/${blog.category}`} className={`py-1 px-2 mr-2 rounded bg-fuchsia-100 text-fuchsia-600 text-xs hover:bg-fuchsia-500 hover:text-white`}>{blog.category}</a>
                                        {
                                        blog.tags.map((tag, i) => {
                                            return <a href={`tags/${tag.replace(" ", "-")}`} key={i} className={`py-1 px-2 mr-2 rounded bg-orange-100 text-red-600 text-xs hover:bg-orange-500 hover:text-white`}>{tag}</a>
                                        })
                                    }</p>
                                    <p>{blog.summary}</p>

                                    <div className="flex items-center text-gray-400 text-md mr-10 mt-5"><FiUser className="p-1 rounded-full bg-gray-300 text-white text-2xl mr-2"/>{blog.author}</div>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Bookmarks;