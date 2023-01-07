import { useContext } from "react";
import { CommentsContext } from "../../context/commentsContext";
import { formatDate } from "../../utils/helpers/formatDate";
import AddReaction from "./addReaction";

const SingleComment = ({ comment, post_id }) => {
    const { comments } = useContext(CommentsContext);

    return (
        <div id={comment.content.replaceAll(" ", "-")} className={` flex flex-col ${comment.name !== "Shakesfem" ? "items-end" : "items-start" } w-full my-2`}>
            <div className={`md:w-[50%] sm:w-[75%] w-full flex flex-col ${comment.name !== "Shakesfem" ? "items-end" : "items-start"}`}>
                <p className="text-[9px] p-1 flex items-center">
                    <span className="text-[12px] font-bold mr-4 text-fuchsia-600">{comment.name}</span>
                    {
                        formatDate(comment.commented_on).map((item, i) => {
                            return <span key={i} className="mt-1 mr-1">{item}</span>
                        })
                    }
                </p>
                <div className={`p-4 ${comment.name !== "Shakesfem"? "rounded-l-lg" : "rounded-r-lg"} bg-white text-sm shadow-md`}>
                    {comments.filter(item => item.id === comment.replied_to).map(element => {
                        return <a href={`#${element.content.replaceAll(" ", "-")}`} className="text-[10px] p-2 bg-gray-100">{element.content.substring(0, 40)}...</a>
                    })}
                    <p className="my-2">{comment.content}</p>
                </div>
            </div>
            <AddReaction reaction={comment.reaction} id={comment.id} name={comment.name} post_id={post_id}/>
        </div>
    )
}

export default SingleComment;