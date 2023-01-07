import Box from "../../../../components/editor/box/box";
import EditorHeader from "../../../../components/editor/header/editorHeader";
import { useContext, useEffect, useState } from "react";
import { updatePost } from "../../../../firebase/postsActions";
import { BlogsContext } from "../../../../context/blogsContext";
import { useParams } from "react-router-dom";

const EditPost = () => {
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
    const [status, setStatus] = useState("Published");
    const { blogs } = useContext(BlogsContext);

    const { postId } = useParams();

    const publish = () => {
        setStatus("Loading...")
        updatePost(postId, blog)
        setStatus("Published")
    }

    useEffect(() => {
        setBlog(blogs.filter(post => post.id === postId)[0])
    }, [setBlog, postId, blogs])

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