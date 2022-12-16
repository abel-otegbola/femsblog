import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlogsContext } from "../../context/blogsContext";
import { formatDate } from "../../utils/helpers/formatDate";
import { getPostsContents } from "../../utils/helpers/getPostsContents";

const Post = () => {
    const [post, setPost] = useState([])
    const blogs = useContext(BlogsContext)
    const { slug } = useParams();

    useEffect(() => {
        setPost(blogs.filter(blog => blog.slug === slug)[0]);
    }, [blogs, slug])

    return (
        <div>
            {
               post && 
               
               <div className="p-[3%]">
                <p className="text-center uppercase text-[10px] mb-3">{post.category}</p>
                    <h1 className="text-center font-bold text-2xl">{post.title}</h1>
                    <p className="text-fuchsia-500 py-2 text-center">
                        {
                            formatDate(post.createdAt || "2022-10-10 5:02").map((item, i) => { return (
                                <span key={i} className="mr-2">{item}</span>
                            ) })
                        }
                    </p>
                    <img src={post.imgUrl} alt={post.title} className="md:w-[75%] w-full my-4 mx-auto" />

                    <div className="md:w-[75%] w-full mx-auto">
                        {
                            post.content && post.content.map((content, i) => {
                                return (
                                    getPostsContents(content,i)
                                )
                            })
                        }
                        
                    </div>
               </div>
            }
        </div>
    )
}

export default Post;