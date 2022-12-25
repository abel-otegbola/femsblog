import Box from "../../../../components/editor/box/box";
import EditorHeader from "../../../../components/editor/header/editorHeader";
import uuid from "react-uuid"
import { useContext, useState } from "react";
import { BlogsContext } from "../../../../context/blogsContext";

const NewPost = () => {
    const { blogs, setBlogs } = useContext(BlogsContext)
    const [blog, setBlog] = useState({
        id: uuid(),
        author: "Shakesfem",
        title: "Input post title here",
        category: "Input post category",
        tags: [],
        summary: "Type in the post summary here",
        slug: "",
        createdAt: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
        updatedAt: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
        content: [],
        imgUrl: `https://picsum.photos/id/${2}/1000/500`
    })

    const publish = () => {
        setBlogs([...blogs, blog])
    }

    return (
        <div className="">
            <EditorHeader handlePublish={publish} />

            <div className="flex items-stretch">
                <Box blog={blog} setBlog={setBlog} />
            </div>
        </div>
    )
}

export default NewPost;