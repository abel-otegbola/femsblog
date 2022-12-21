import { useRef } from "react"
import { FaTimesCircle } from "react-icons/fa"
import Block from "../block/block"

const Box = ({ blog, setBlog }) => {
    const inputRef = useRef()

    const handleTags = (e) => {
        if(e.key === "Enter" || e.key === ",") {
            setBlog({ ...blog, tags: [...blog.tags, e.target.value.replace(",","")] })
            inputRef.current.value = "";
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

    const deleteTag = (tag) => {
        setBlog({ ...blog, tags: blog.tags.filter(item => item !== tag) })
    }

    return (
        <div className="flex-1 border border-slate-400 p-[3%]">
            
            <div className="flex mb-4 flex-wrap">
                <div className="sm:w-[50%] w-full my-2">
                    <h1 className="font-semibold p-1">Category<sup className="text-red-500">*</sup></h1>
                    <input className="w-full mt-1 border border-gray-200 p-2 mb-5 focus:outline-fuchsia-200" placeholder={blog.category} onChange={(e) => handleCategory(e.target.value)}/>

                    <h1 className="font-semibold p-1">Title<sup className="text-red-500">*</sup></h1>
                    <input className="w-full mt-1 border border-gray-200 p-2 mb-5 focus:outline-fuchsia-200" placeholder={blog.title} onChange={(e) => handleTitle(e.target.value)}/>

                    <h1 className="font-semibold p-1">Tags</h1>
                    <p className={`w-full my-2 text-center flex p-1 border border-gray-200`}>
                        {
                        blog.tags && blog.tags.map((tag, i) => {
                            return <span key={i} className={`flex items-center w-auto py-1 px-3 mr-2 rounded bg-fuchsia-500/[.1] text-fuchsia-600 text-sm`}>{tag} <FaTimesCircle className="ml-2" onClick={() => deleteTag(tag)} /></span>
                        })
                        }
                        <input className={`w-28 py-1 px-2 pb-2 mr-2 rounded text-sm border-none focus:outline-none flex-1`} ref={inputRef} placeholder="Add tags" onKeyUp={(e) => handleTags(e)}/>
                    </p>
                </div>
            
                <div className="flex-1 md:mx-4 mt-2">
                    <h1 className="font-semibold p-1">Post Summary</h1>
                    <textarea className="flex-1 border border-gray-200 w-full h-full p-3 my-1 focus:outline-fuchsia-200" placeholder={blog.summary} onChange={(e) => handleSummary(e.target.value)}></textarea>
                </div>
            </div>

            
            <h1 className="font-semibold p-1 mt-14 mb-1">Post Body</h1>
            <Block blog={blog} setBlog={setBlog} />
        </div>
    )
}

export default Box;