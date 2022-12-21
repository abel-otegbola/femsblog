import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlogsContext } from "../../context/blogsContext";
import { formatDate } from "../../utils/helpers/formatDate";

const Post = () => {
    const [post, setPost] = useState([])
    const {blogs} = useContext(BlogsContext)
    const { slug } = useParams();

    useEffect(() => {
        setPost(blogs.filter(blog => blog.slug === slug)[0]);
    }, [blogs, slug])

    return (
        <div>
            {
               post && 
               <div className="px-[3%] py-[30px]">
                <a href={`/categories/${post.category && post.category.replace(" ", "-")}`} className="text-center flex w-full justify-center uppercase text-[14px] mb-3">{post.category}</a>
                    <h1 className="text-center font-bold text-2xl">{post.title}</h1>
                    <p className="text-fuchsia-500 py-2 text-center">
                        {
                            formatDate(post.createdAt || "2022-10-10 5:02").map((item, i) => { return (
                                <span key={i} className="mr-1">{item}</span>
                            ) })
                        }
                        <span className="ml-4">By {post.author}</span>
                    </p>
                    
                    <p className="my-2 text-center">
                        {
                        post.tags && post.tags.map((tag, i) => {
                            return <a key={i} href={`/tags/${tag.replace(" ", "-")}`} className={`py-1 px-2 pb-2 mr-2 rounded bg-fuchsia-500/[.1] text-fuchsia-600 text-sm hover:bg-fuchsia-500 hover:text-white`}>{tag}</a>
                        })
                    }</p>
                    <img src={post.imgUrl} alt={post.title} className="md:w-[75%] w-full my-4 mx-auto" />

                    <div className="md:w-[75%] w-full mx-auto">
                        <div className="leading-8 text-justify my-4 first-letter:text-5xl" dangerouslySetInnerHTML={{ __html: post.content}} />
                    </div>
               </div>
            }
        </div>
    )
}

export default Post;