import { useState } from "react";
import { FaAngry, FaHeart, FaSmile } from "react-icons/fa";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";

const AddReaction = ({ reaction, id }) => {
    const [isOpen, setOpen] = useState(false)

    const addReaction = (query) => {
        console.log(query, id)
    }

    return (
        <div className="flex gap-1">
            {
                reaction === "smile" ?  <FaSmile className="text-yellow-300 shadow-lg p-[3px] bg-white text-xl rounded-full" onClick={() => setOpen(!isOpen)} /> :
                reaction === "heart" ?  <FaHeart className="text-red-500 shadow-lg p-[3px] bg-white text-xl rounded-full" onClick={() => setOpen(!isOpen)} /> :
                reaction === "thumbsup" ?  <FiThumbsUp className="text-green-500 shadow-lg text-sm rounded-full" onClick={() => setOpen(!isOpen)}/>:
                reaction === "thumbsdown" ?  <FiThumbsDown className="text-blue-500 shadow-lg p-[3px] bg-white text-xl rounded-full" onClick={() => setOpen(!isOpen)} /> :
                reaction === "angry" ?  <FaAngry className="text-red-800 shadow-lg p-[3px] bg-white text-xl rounded-full" onClick={() => setOpen(!isOpen)} /> :
                <FaSmile className="text-gray-200 shadow-lg p-[3px] bg-white text-xl rounded-full" onClick={() => setOpen(!isOpen)} /> 
            }
            
            <div className={`flex gap-1 ml-2 overflow-hidden transition-all duration-700 ${isOpen ? "w-[0]": "w-[100px]"}`}>
                <FaHeart className={`text-red-500 bg-white shadow-lg text-lg rounded-full p-[2px]`} onClick={() => addReaction("heart")} />
                <FaSmile className={`text-yellow-300 bg-white shadow-lg text-lg rounded-full p-[2px]`} onClick={() => addReaction("smile")} />
                <FiThumbsUp className={`text-green-500 bg-white shadow-lg text-lg rounded-full p-[2px]`} onClick={() => addReaction("thumbsup")} />
                <FiThumbsDown className={`text-blue-500 bg-white shadow-lg text-lg rounded-full p-[2px]`} onClick={() => addReaction("thumbsdown")} />
                <FaAngry className={`text-red-800 bg-white shadow-lg text-lg rounded-full p-[2px]`} onClick={() => addReaction("angry")} />
            </div>
        </div>
    )
}

export default AddReaction;