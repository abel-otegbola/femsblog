import { useContext, useState } from "react";
import uuid from "react-uuid";
import { CommentsContext } from "../../context/commentsContext";
import { ReadersContext } from "../../context/readersContext";
import { addNewReader } from "../../firebase/readersActions";

const CommentForm = ({ post_id, comment_id, setReply }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [comment, setComment] = useState("")

    const {comments, setComments} = useContext(CommentsContext);
    const { reader, setReader } = useContext(ReadersContext);

    const postComment = (e) => {
        e.preventDefault();

        if(reader === null ) {
            addNewReader({ name, email, bookmarks: [] })
            .then(result => setReader({ name, email, bookmarks: [] }))
        }

        setComments([ ...comments,
            {
                id: uuid(),
                post_id,
                content: comment,
                email,
                name,
                reaction: "",
                commented_on: `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`,
                replied_to: comment_id || null
            }
        ])

        if(setReply) {
            setReply(false)
        }
        setName("")
        setEmail("")
        setComment("")
    }

    return (
        <form className="py-4 flex flex-wrap justify-between bg-white p-2" onSubmit={(e) => postComment(e)}>
            <input className="p-2 border border-slate-300 w-[49%] focus:outline-fuchsia-400 focus:outline-4" vlaue={reader ? reader.name : name} type="text" placeholder="Name" required onChange={(e) =>setName(e.target.value) } />
            <input className="p-2 border border-slate-300 w-[49%] focus:outline-fuchsia-400 focus:outline-4" value={reader ? reader.email : email} type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
            <textarea className="p-2 h-[200px] border border-slate-300 w-full my-4 focus:outline-fuchsia-400 focus:outline-4" value={comment} placeholder="Comment" required onChange={(e) => setComment(e.target.value)}></textarea>
            <button className="p-2 bg-fuchsia-600 text-white rounded text-center w-full hover:bg-fuchsia-700">POST COMMENT</button>
        </form>
    )
}

export default CommentForm;