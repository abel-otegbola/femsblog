import { createContext, useEffect, useState } from "react";
import { getAllPosts } from "../firebase/firebase";

export const BlogsContext = createContext()

const BlogsContextProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);

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