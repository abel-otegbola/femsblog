import Box from "../../../../components/editor/box/box";
import EditorHeader from "../../../../components/editor/header/editorHeader";
import { useEffect, useState } from "react";
import { updatePost } from "../../../../firebase/firebase";
import { BlogsContext } from "../../../../context/blogsContext";

const EditPost = () => {
    const [blog, setBlog] = useState({})
    const [status, setStatus] = useState("Publish");
    const { blogs } = useContext(BlogsContext);

    const { postId } = useParams();

    const publish = () => {
        if(status === "Publish") {
            setStatus("Published")
        }
        else if(status === "Published") {
            setStatus("Loading...")
            setStatus("Published")
        }
        updatePost(blog)
    }

    useEffect(() => {
        setBlog(blogs.filter(blog => blog.id === postId))
    })

    return (
        <div className="">
            <EditorHeader handlePublish={publish} status={status} />

            <div className="flex items-stretch">
                <Box blog={blog} setBlog={setBlog} />
            </div>
        </div>
    )
}

export default EditPost;