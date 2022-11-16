import { createContext, useEffect, useState } from "react";
import { blogsData } from "../data/blogs"

export const BlogsContext = createContext()

const BlogsContextProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        setBlogs(blogsData)
    }, [setBlogs])

    return (
        <BlogsContext.Provider value={blogs}>
            { children }
        </BlogsContext.Provider>
    )
}

export default BlogsContextProvider;