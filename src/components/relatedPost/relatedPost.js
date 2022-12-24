import { useContext } from "react";
import { BlogsContext } from "../../context/blogsContext";
import { formatDate } from "../../utils/helpers/formatDate";

const RelatedPosts = ({ id, tags, category }) => {

    const { blogs } = useContext(BlogsContext)

    return (
        <div className="p-[3%] py-10">
            <h2 className="p-2 bg-gray-100 w-full">RELATED POSTS</h2>

            <div className="grid gap-4 md:grid-cols-3 grid-cols-1 my-10">
            {
                blogs.filter(item =>( item.category === category && item.id !== id )).slice(0,3).map(blog => { return (
                    <a href={`/post/${blog.slug}`} key={blog.id} className="md:mx-2 md:mb-2 mb-2 sm:mb-2 p-2 block bg-white rounded bg-slate-50">
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
                        </div>
                    </a> )
                })       
             }
            </div>
           
        </div>
    )
}

export default RelatedPosts;