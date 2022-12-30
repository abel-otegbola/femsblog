import { createContext, useEffect } from "react";
import { useSessionStorage } from "../customHooks/useSessionStorage";
import { getAllPosts } from "../firebase/firebase";

export const BlogsContext = createContext()

const BlogsContextProvider = ({ children }) => {
    const [blogs, setBlogs] = useSessionStorage("blogs", []);

    const fetchData = async () => {
        await getAllPosts()
        .then(result => {setBlogs(result)})
        .catch(console.error)
    }

    useEffect(() => {
        fetchData()
    })

    return (
        <BlogsContext.Provider value={{blogs, setBlogs}}>
            { children }
        </BlogsContext.Provider>
    )
}

export default BlogsContextProvider;
