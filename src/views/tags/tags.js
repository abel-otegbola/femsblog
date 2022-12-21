import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeroBlog from "../../components/home/heroBlog/heroBlog";
import HeroSection from "../../components/home/heroSection/heroSection";
import { BlogsContext } from "../../context/blogsContext";

const Tags = () => {
    const { tag } = useParams();
    const [tags, setTags] = useState([])
    const { blogs } = useContext(BlogsContext)

    useEffect(() => {
        for(let i=0; i<blogs.length; i++) {
            blogs[i].tags.forEach((tag) => {
                if(tags.indexOf(tag) < 0) {
                   setTags([...tags, tag])
                }
            })
        };
    }, [blogs, tags])

    return (
        <div>
            <HeroSection text={tag} />

                <div className="flex-1 my-2">
                    {
                        blogs.filter(item => item.tags.indexOf(tag) !== -1).map(blog => {
                            return (
                                <HeroBlog key={blog.id} blog={blog} />
                            )
                        })
                    }
                    </div>
            
                    <div className="flex-1 my-10 p-4 text-center">
                        <h1 className="p-4">OTHER TAGS</h1>
                    {
                        tags.map((tag, i) => {
                            return (
                                <a key={i} href={`/tags/${tag}`} className="px-3 py-2 border border-gray-300 my-2 mx-1 hover:bg-fuchsia-600 hover:text-white">{tag}</a>
                            )
                        })
                    }
                </div>
        </div>
    )
}

export default Tags;