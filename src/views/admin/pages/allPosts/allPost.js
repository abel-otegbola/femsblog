import { useContext, useState, useEffect } from 'react';
import Header from "../../../../components/editor/header/header";
import { BlogsContext } from "../../../../context/blogsContext";
import { formatDate } from "../../../../utils/helpers/formatDate";
import { FaTrashAlt } from "react-icons/fa"
import { deletePost } from '../../../../firebase/postsActions';

const AllPost = () => {
    const [allBlogs, setAllBlogs] = useState([])
    const { blogs } = useContext(BlogsContext)

    useEffect(() => {
        setAllBlogs(blogs)
    }, [setAllBlogs, blogs])

    const handleDeletePost = (id) => {
        deletePost(id)
        // window.location.reload()
    }

    return (
        <div className="">
            <Header text={"All Posts"} />

            <div className="p-[1] bg-gray-100 w-full overflow-x-auto">
                <div className="bg-white flex">
                    
                </div>

                <div className="p-2 min-w-[900px]">
                    {
                        allBlogs.map(blog => {
                            return (
                                <div key={blog.id} className="bg-white flex my-1 justify-between">
                                    <a href={`/post/${blog.slug}`} className="flex items-center rounded w-full hover:text-fuchsia-600">
                                        <div className="w-[40%] p-2 px-4 my-2 font-semibold">{blog.title}</div>
                                        <p className="text-gray-400 py-2 w-[30%]">
                                            {
                                                formatDate(blog.createdAt).map((item, i) => { return (
                                                    <span key={i} className="mr-1">{item}</span>
                                                ) })
                                            }
                                        </p>
                                        <p>{blog.author}</p>
                                    </a>
                                    <div className="flex items-center w-[10%]">
                                        <a href={`/admin/edit-post/${blog.id}`} className="mx-2 my-2">Edit</a>
                                        <button className="ml-4 text-red-400" onClick={() => handleDeletePost(blog.id)}><FaTrashAlt /></button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default AllPost;