

const HeroBlog = ({ blog }) => {
    return (
        <div className="m-2">
            <img src={blog.imgUrl} className="rounded h-80" alt="blog" width="100%" />
            <div className="py-3 px-2">
                <p className="text-fuchsia-500 py-2">{blog.createdAt}</p>
                <h1 className="font-heading text-xl font-bold">{blog.title}</h1>
                <p>{blog.summary}</p>
            </div>
        </div>
    )
}

export default HeroBlog;