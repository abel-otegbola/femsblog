import Box from "../../../../components/editor/box/box";
import EditorHeader from "../../../../components/editor/header/editorHeader";
import { useState } from "react";
import { addNewPost, updatePost } from "../../../../firebase/firebase";

const NewPost = () => {
    const [blog, setBlog] = useState({
        author: "Shakesfem",
        title: "",
        category: "",
        tags: [],
        summary: "",
        slug: "",
        createdAt: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
        updatedAt: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
        content: [],
        imgUrl: {title: "", url: ``}
    })
    const [status, setStatus] = useState("Publish");
    const [publishedId, setPublishedId] = useState("");


    const publish = () => {
        if(status === "Publish") {
            setStatus("Loading...")
            addNewPost(blog)
            .then(result => {
                setPublishedId(result)
                setStatus("Published")
            })
        }
        else if(status === "Published") {
            updatePost(publishedId, blog)
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