import Box from "../../../../components/editor/box/box";
import EditorHeader from "../../../../components/editor/header/editorHeader";
import uuid from "react-uuid"
import { useState } from "react";
import { addNewPost, updatePost } from "../../../../firebase/firebase";

const NewPost = () => {
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
    const [status, setStatus] = useState("Publish")

    const publish = () => {
        if(status === "Publish") {
            setStatus("Loading...")
            addNewPost(blog)
            setStatus("Published")
        }
        else if(status === "Published") {
            setStatus("Loading...")
            updatePost(blog)
            setStatus("Published")
        }
    }

    return (
        <div className="">
            <EditorHeader handlePublish={publish} status={status} />

            <div className="flex items-stretch">
                <Box blog={blog} setBlog={setBlog} />
            </div>
        </div>
    )
}

export default NewPost;