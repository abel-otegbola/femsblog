import { FaTimesCircle } from "react-icons/fa"
import { formatDate } from "../../../utils/helpers/formatDate"
import Block from "../block/block"

const Box = ({ blog, setBlog }) => {

    const handleTags = (e) => {
        if(e.key === "Enter") {
            setBlog({ ...blog, tags: [...blog.tags, e.target.value] })
        }
    }

    const handleTitle = (title) => {
        setBlog({ ...blog, title, slug: title.replace(" ", "-") })
    }

    const handleCategory = (category) => {
        setBlog({ ...blog, category })
    }

    const handleSummary = (summary) => {
        setBlog({ ...blog, summary })
    }

    return (
        <div className="flex-1 border border-slate-400 p-[3%]">
            
            <input className="w-full border-none text-center uppercase text-[10px] mb-3 focus:outline-gray-100" placeholder={blog.category} onChange={(e) => handleCategory(e.target.value)}/>
            <input className="w-full border-none text-center font-bold text-2xl focus:outline-gray-100" placeholder={blog.title} onChange={(e) => handleTitle(e.target.value)}/>
            <p className="text-fuchsia-500 py-2 text-center">
                {
                    formatDate(blog.createdAt).map((item, i) => { return (
                        <span key={i} className="mr-2">{item}</span>
                    ) })
                }
            </p>

            <p className="my-2 text-center flex justify-center">
                {
                blog.tags && blog.tags.map((tag, i) => {
                    return <span key={i} className={`flex items-center w-auto py-1 px-3 mr-2 rounded bg-fuchsia-500/[.1] text-fuchsia-600 text-sm`}>{tag} <FaTimesCircle className="ml-2" /></span>
                })
                }
                <input className={`w-28 py-1 px-2 pb-2 mr-2 rounded text-sm border border-gray-200 focus:outline-gray-100 text-center`} placeholder="Input tag" onKeyUp={(e) => handleTags(e)}/>
            </p>
            <input className="w-full border-none text-center py-2 my-4 focus:outline-gray-100" placeholder={blog.summary} onChange={(e) => handleSummary(e.target.value)}/>

            <Block blog={blog} setBlog={setBlog} />
        </div>
    )
}

export default Box;