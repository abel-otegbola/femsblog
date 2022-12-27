import { useContext } from "react";
import { CommentsContext } from "../../context/commentsContext";
import CommentForm from "./commentForm";
import SingleComment from "./singleComment";

const CommentSection = ({ id }) => {
    const { comments } = useContext(CommentsContext);

    return (
        <div className="py-4 w-full m-auto">
            <h1 className="font-bold p-2 bg-slate-200">LEAVE A COMMENT</h1>
            <p className="text-xs py-2">Your email address will not be published</p>

            <CommentForm post_id={id} />
            <div className="bg-gray-100 p-2">
                {
                    comments.filter(item => item.post_id === id).map(comment => {
                        return (
                            <SingleComment comment={comment} key={comment.id} post_id={id} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CommentSection;