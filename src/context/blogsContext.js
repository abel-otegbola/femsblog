import { createContext, useEffect } from "react";
import { useLocalStorage } from "../customHooks/useLocalStorage";
import { blogsData } from "../data/blogs"

export const BlogsContext = createContext()

const BlogsContextProvider = ({ children }) => {
    const [blogs, setBlogs] = useLocalStorage("blogs", blogsData);

    useEffect(() => {
        console.log(blogs)
    })

    return (
        <BlogsContext.Provider value={{blogs,setBlogs}}>
            { children }
        </BlogsContext.Provider>
    )
}

export default BlogsContextProvider;