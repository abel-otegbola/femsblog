import { createContext, useEffect } from "react";
import { useLocalStorage } from "../customHooks/useLocalStorage";
import { getAllPosts } from "../firebase/firebase";

export const BlogsContext = createContext()

const BlogsContextProvider = ({ children }) => {
    const [blogs, setBlogs] = useLocalStorage("blogs", []);

    useEffect(() => {
        getAllPosts().then(result => setBlogs(result))
    })

    return (
        <BlogsContext.Provider value={{blogs,setBlogs}}>
            { children }
        </BlogsContext.Provider>
    )
}

export default BlogsContextProvider;