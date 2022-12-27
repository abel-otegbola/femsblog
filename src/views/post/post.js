import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentSection from "../../components/comments/commentsSection";
import RelatedPosts from "../../components/relatedPost/relatedPost";
import { BlogsContext } from "../../context/blogsContext";
import { formatDate } from "../../utils/helpers/formatDate";
import styles from "./post.module.css";
import DOMPurify from 'dompurify';
import { Helmet } from "react-helmet";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"

const Post = () => {
    const [post, setPost] = useState({
        id: 1,
        author: "",
        title: "",
        category: "",
        tags: [""],
        summary: "",
        slug: "",
        createdAt: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
        updatedAt: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
        content: [],
        imgUrl: {title: "", url: ``}
    })
    const {blogs} = useContext(BlogsContext)
    const { slug } = useParams();

    useEffect(() => {
        setPost(blogs.filter(blog => (blog.slug === slug))[0]);
    }, [blogs, slug])

    return (
        <div>
            <Helmet>
                <title>{post && post.title}</title>
                <meta name="description" content={post && post.summary} />
                <meta name="robots" content="index, follow" />
            </Helmet>
            {
               <div className="md:w-[75%] m-auto px-[3%] py-[30px]">
                <a href={`/categories/${post && post.category}`} className="uppercase text-[14px] mb-3">{(post && post.category) || <Skeleton />}</a>
                    <h1 className="my-3 font-bold text-4xl">{(post && post.title) || <Skeleton />}</h1>
                    <p className="py-2">
                        {
                            (formatDate((post && post.createdAt) || "2022-10-10 5:02").map((item, i) => { return (
                                <span key={i} className="mr-1">{item}</span>
                            ) })) || <Skeleton count={3} />
                        }
                        <span className="ml-4 text-fuchsia-500">By {(post && post.author) ||  <Skeleton />}</span>
                    </p>
                    
                    <p className="my-2 mb-8">
                        {
                        (post && post.tags.map((tag, i) => {
                            return <a key={i} href={`/tags/${tag.replace(" ", "-")}`} className={`py-1 p-1 px-2 pb-2 mr-4 rounded bg-gray-100 text-gray-600 text-xs uppercase hover:bg-fuchsia-500 hover:text-white`}>{tag}</a>
                        })) || <Skeleton count={3} />
                    }</p>
                    {<img src={post && post.imgUrl.url} alt={post && post.title} className="w-full my-4 mx-auto" /> || <Skeleton height={600} />}

                    <div className={`w-full mx-auto ${styles.post}`}>
                        {<div className="leading-8 text-justify my-4 first-letter:text-5xl" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post && post.content)}} /> || <Skeleton height={300} />}
                    </div>

                    <div>
                        <CommentSection id={post && post.id}/>
                    </div>

                    <div>
                        <RelatedPosts tags={post && post.tags} category={post && post.category} id={post && post.id}/>
                    </div>
               </div>
            }

        </div>
    )
}

export default Post;
