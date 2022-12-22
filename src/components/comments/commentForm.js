const CommentForm = () => {

    const postComment = (e) => {
        e.preventDefault();
        console.log(e.target.value)
    }

    return (
        <form className="py-4 flex flex-wrap justify-between" onSubmit={(e) => postComment(e)}>
            <input className="p-2 border border-slate-300 w-[49%] focus:outline-fuchsia-400 focus:outline-4" type="text" placeholder="Name" />
            <input className="p-2 border border-slate-300 w-[49%] focus:outline-fuchsia-400 focus:outline-4" type="email" placeholder="Email" />
            <textarea className="p-2 h-[200px] border border-slate-300 w-full my-4 focus:outline-fuchsia-400 focus:outline-4" placeholder="Comment"></textarea>
            <button className="p-2 bg-fuchsia-600 text-white rounded text-center w-full hover:bg-fuchsia-700">POST COMMENT</button>
        </form>
    )
}

export default CommentForm;