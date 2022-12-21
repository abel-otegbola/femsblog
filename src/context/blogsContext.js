import { createContext } from "react";
import { useLocalStorage } from "../customHooks/useLocalStorage";
import { blogsData } from "../data/blogs"

export const BlogsContext = createContext()

const BlogsContextProvider = ({ children }) => {
    const [blogs, setBlogs] = useLocalStorage("blogs", blogsData);

    return (
        <BlogsContext.Provider value={{blogs,setBlogs}}>
            { children }
        </BlogsContext.Provider>
    )
}

export default BlogsContextProvider;