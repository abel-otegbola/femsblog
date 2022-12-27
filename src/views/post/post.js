import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentSection from "../../components/comments/commentsSection";
import RelatedPosts from "../../components/relatedPost/relatedPost";
import { BlogsContext } from "../../context/blogsContext";
import { formatDate } from "../../utils/helpers/formatDate";
import styles from "./post.module.css";
import DOMPurify from 'dompurify';
import { Helmet } from "react-helmet";

const Post = () => {
    const [post, setPost] = useState([])
    const {blogs} = useContext(BlogsContext)
    const { slug } = useParams();

    useEffect(() => {
        setPost(blogs.filter(blog => blog.slug === slug)[0]);
    }, [blogs, slug])

    return (
        <div>
            <Helmet>
                <title>{post && post.title}</title>
                <meta name="description" content={post && post.summary} />
                <meta name="robots" content="index, follow" />
            </Helmet>
            {
               post && 
               <div className="md:w-[75%] m-auto px-[3%] py-[30px]">
                <a href={`/categories/${post.category && post.category}`} className="flex uppercase text-[14px] mb-3">{post.category}</a>
                    <h1 className="my-3 font-bold text-4xl">{post.title}</h1>
                    <p className="py-2">
                        {
                            formatDate(post.createdAt || "2022-10-10 5:02").map((item, i) => { return (
                                <span key={i} className="mr-1">{item}</span>
                            ) })
                        }
                        <span className="ml-4 text-fuchsia-500">By {post.author}</span>
                    </p>
                    
                    <p className="my-2 mb-8">
                        {
                        post.tags && post.tags.map((tag, i) => {
                            return <a key={i} href={`/tags/${tag.replace(" ", "-")}`} className={`py-1 p-1 pb-2 mr-4 rounded uppercase text-xs bg-gray-100 hover:bg-fuchsia-500 hover:text-white`}>{tag}</a>
                        })
                    }</p>
                    <img src={post.imgUrl && post.imgUrl.url} alt={post.title} className="w-full my-4 mx-auto" />

                    <div className={`w-full mx-auto ${styles.post}`}>
                        <div className="leading-8 text-justify my-4 first-letter:text-5xl" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content)}} />
                    </div>

                    <div>
                        <CommentSection id={post.id}/>
                    </div>

                    <div>
                        <RelatedPosts tags={post.tags} category={post.category} id={post.id}/>
                    </div>
               </div>
            }

        </div>
    )
}

export default Post;
