import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeroBlog from "../../components/home/heroBlog/heroBlog";
import HeroSection from "../../components/home/heroSection/heroSection";
import { BlogsContext } from "../../context/blogsContext";

const Categories = () => {
    const [categories, setCategories] = useState([])
    const { category } = useParams()
    const { blogs } = useContext(BlogsContext)

    useEffect(() => {
        blogs.forEach((blog) => {
            if(categories.indexOf(blog.category) < 0) {
                setCategories([...categories, blog.category])
            }
        })
        console.log(categories)
    }, [blogs, categories])

    return (
        <div>
            <HeroSection text={"CATEGORIES"} />
            <div className="bg-gray-100 flex flex-wrap">
                <div className="md:sticky static top-2 md:h-screen p-3 px-0 m-2 rounded bg-white md:w-[250px] w-full">
                    <a href="/categories/" className={`px-5 py-4 border border-gray-100 block w-full hover:bg-fuchsia-600 hover:text-white ${(!category) ? "bg-fuchsia-600 text-white" : ""}`}>All</a>
                    {
                        categories.map((item, i) => {
                            return (
                                <a href={item} key={i} className={`px-4 py-4 border border-gray-100 block w-full hover:bg-fuchsia-600 hover:text-white ${(item === category) ? "bg-fuchsia-600 text-white" : ""}`}>{item}</a>
                            )
                        })
                    }
                </div>
                {
                    category ? <div className="flex-1 my-2">
                    {
                        blogs.filter(item => item.category === category).map(blog => {
                            return (
                                <HeroBlog key={blog.id} blog={blog} />
                            )
                        })
                    }
                    </div>
                    :
                    <div className="flex-1 my-2">
                    {
                        blogs.map(blog => {
                            return (
                                <HeroBlog key={blog.id} blog={blog} />
                            )
                        })
                    }
                    </div>
                }
            </div>
        </div>
    )
}

export default Categories;