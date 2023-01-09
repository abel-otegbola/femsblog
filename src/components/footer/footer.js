import { useContext, useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { BlogsContext } from "../../context/blogsContext";

const Footer = () => {
    const { blogs } = useContext(BlogsContext)
    const [categories, setCategories] = useState([])

    useEffect(() => {
        blogs.forEach((blog) => {
            if(categories.indexOf(blog.category) < 0) {
                setCategories([...categories, blog.category])
            }
        })
    }, [blogs, categories])

    return (
        <div className="footer p-[3%] bg-gray-800 text-white">
            <div className="flex justify-between flex-wrap">
                <div className="md:w-[35%] w-full mr-[5%] pt-8">
                    <h3 className="text-xl font-bold mb-3">SHAKESFEM XPACE</h3>
                    <div className="flex bg-white items-center p-[1px] rounded">
                        <input type="email" className="p-3 flex-1 text-gray-800" placeholder="Subscribe to our newsletter..." />
                        <button className="p-3 mr-1 rounded bg-gray-800 hover:bg-fuchsia-600 text-white"><FaTelegramPlane /></button>
                    </div>
                </div>

                <div className="md:w-[25%] w-full pt-8">
                    <h2 className="font-semibold pb-3">CATEGORIES</h2>
                    <ul>
                        {
                            categories.slice(0,4).map((category, i) => { return (
                                <li className="py-1 flex" key={i}><a className="py-1 w-full" href={`/categories/${category}`}>{category}</a></li>
                            )})
                        }
                        <a className="py-2 text-fuchsia-600" href="/categories">view more</a>
                    </ul>
                </div>

                <div className="md:w-[25%] w-full pt-8">
                    <h2 className="font-semibold pb-3">POSTS</h2>
                    <ul>
                        {
                            blogs.slice(0,3).map(blog => {
                                return (
                                    <li className="py-1 flex" key={blog.id}><a className="py-1 w-full" href="/post/How-to-code-using-javascript">{blog.title}</a></li>
                                )
                            })
                        }
                        <a className="py-2 text-fuchsia-600" href="/categories">view more</a>
                    </ul>
                </div>
                <div className="md:w-[10%] w-full pt-8">
                    <h2 className="font-semibold pb-3">SOCIALS</h2>
                    <div className="flex items-start mt-5 text-gray-800">
                        <a href="https://facebook.com/" className="mr-3 p-2 rounded bg-white"><FaFacebook /></a>
                        <a href="https://twitter.com/" className="mr-3 p-2 rounded bg-white"><FaTwitter /></a>
                        <a href="https://instagram.com/" className="mr-3 p-2 rounded bg-white"><FaInstagram /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;