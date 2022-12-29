import { createContext, useEffect } from "react";
import { getAllPosts } from "../firebase/firebase";
import { useSessionStorage } from "../customHooks/useSessionStorage;

export const BlogsContext = createContext()

const BlogsContextProvider = ({ children }) => {
    const [blogs, setBlogs] = useSessionStorage("blogs", []);

    useEffect(() => {
        const fetchData = async () => {
            await getAllPosts()
            .then(result => {setBlogs(result); console.log(result)})
        }
        fetchData()
        .catch(console.error)
    }, [])

    return (
        <BlogsContext.Provider value={{blogs,setBlogs}}>
            { children }
        </BlogsContext.Provider>
    )
}

export default BlogsContextProvider;
