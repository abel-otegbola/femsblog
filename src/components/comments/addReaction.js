import { useContext, useState } from "react";
import { FaAngry, FaHeart, FaSmile } from "react-icons/fa";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import CommentForm from "./commentForm";
import { CommentsContext } from "../../context/commentsContext";

const AddReaction = ({ reaction, name, id, post_id }) => {
    const [isOpen, setOpen] = useState(false)
    const [reply, setReply] = useState(false)
    const { comments, setComments } = useContext(CommentsContext);

    const addReaction = (query) => {
        setComments(comments.map(comment => {
            if (comment.id === id) {
                return {...comment, reaction: query}
            }
            else {
                return comment
            }
        }))
        setOpen(false)
    }

    return (
        <div className="flex gap-1 relative">
            {
                reaction === "smile" ?  <FaSmile className="text-yellow-400 shadow-lg p-[3px] bg-white text-xl rounded-full" onClick={() => setOpen(!isOpen)} /> :
                reaction === "heart" ?  <FaHeart className="text-red-500 shadow-lg p-[3px] bg-white text-xl rounded-full" onClick={() => setOpen(!isOpen)} /> :
                reaction === "thumbsup" ?  <FiThumbsUp className="text-green-500 shadow-lg p-[3px] bg-white text-xl rounded-full" onClick={() => setOpen(!isOpen)}/>:
                reaction === "thumbsdown" ?  <FiThumbsDown className="text-blue-500 shadow-lg p-[3px] bg-white text-xl rounded-full" onClick={() => setOpen(!isOpen)} /> :
                reaction === "angry" ?  <FaAngry className="text-red-800 shadow-lg p-[3px] bg-white text-xl rounded-full" onClick={() => setOpen(!isOpen)} /> :
                <FaSmile className="text-gray-200 shadow-lg p-[3px] bg-white text-xl rounded-full" onClick={() => setOpen(!isOpen)} /> 
            }
            
            <div className={`flex gap-1 overflow-hidden transition-all duration-700 ${!isOpen ? "w-[0]": "w-[100px]"}`}>
                <FaHeart className={`text-red-500 bg-white shadow-lg text-lg rounded-full p-[2px]`} onClick={() => addReaction("heart")} />
                <FaSmile className={`text-yellow-400 bg-white shadow-lg text-lg rounded-full p-[2px]`} onClick={() => addReaction("smile")} />
                <FiThumbsUp className={`text-green-500 bg-white shadow-lg text-lg rounded-full p-[2px]`} onClick={() => addReaction("thumbsup")} />
                <FiThumbsDown className={`text-blue-500 bg-white shadow-lg text-lg rounded-full p-[2px]`} onClick={() => addReaction("thumbsdown")} />
                <FaAngry className={`text-red-800 bg-white shadow-lg text-lg rounded-full p-[2px]`} onClick={() => addReaction("angry")} />
            </div>
            <p className="px-2 py-1 bg-white mt-1 text-gray-600 hover:bg-fuchsia-600 hover:text-white text-[10px] cursor-pointer rounded" onClick={() => setReply(!reply)}>Reply</p>
            <div className={`${reply ? "absolute" : "hidden"} w-[230px] bottom-[100%] ${name === "Shakefem" ? "left-0" : "right-0"} z-50`}>
                <CommentForm post_id={post_id} comment_id={id} setReply={setReply}/>
            </div>
        </div>
    )
}

export default AddReaction;