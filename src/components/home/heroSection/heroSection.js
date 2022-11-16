import { useContext } from "react";
import { BlogsContext } from "../../../context/blogsContext";
import HeroBlog from "../heroBlog/heroBlog";

const HeroSection = () => {
    const blogs = useContext(BlogsContext)

    return (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-1">
            {
                blogs.filter(item => item.id<4).map(blog => {
                    return (
                        <HeroBlog key={blog.id} blog={blog} />
                    )
                })
            }
        </div>
    )
}

export default HeroSection;