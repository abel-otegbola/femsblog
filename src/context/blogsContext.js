import { createContext } from "react";
import { useSessionStorage } from "../customHooks/useSessionStorage";
import { getAllPosts } from "../firebase/postsActions";

export const BlogsContext = createContext()

const BlogsContextProvider = ({ children }) => {
    const [blogs, setBlogs] = useSessionStorage("blogs", []);

    const fetchPosts = async () => {
        await getAllPosts()
        .then(result => {setBlogs(result)})
        .catch(console.error)
    }

   window.addEventListener("load", () => {
        fetchPosts()
   })

    return (
        <BlogsContext.Provider value={{blogs, setBlogs}}>
            { children }
        </BlogsContext.Provider>
    )
}

export default BlogsContextProvider;
