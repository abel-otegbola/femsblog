import { useRef } from "react"
import { FaTimesCircle } from "react-icons/fa"
import Block from "../block/block"

const Box = ({ blog, setBlog }) => {
    const inputRef = useRef()

    const handleTags = (e) => {
        if(e.key === "Enter" || e.key === "," || e.keyCode === 188 || e.keyCode === 13 || e.keyCode === 66 || e.target.value.indexOf(",") !== -1) {
            setBlog({ ...blog, tags: [...blog.tags, e.target.value.replace(",","")] })
            inputRef.current.value = "";
        }
    }

    const handleTitle = (title) => {
        setBlog({ ...blog, title, slug: title.replaceAll(" ", "-") })
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

    const filetoDataUri = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function(e) {
            resolve(e.target.result)
        }
        reader.readAsDataURL(file)
    })

    const handleThumbnail = (file) => {        
        filetoDataUri(file)
        .then(dataUri => {
            setBlog({ ...blog, imgUrl: { title: file.name, url: dataUri } })
        })
    }

    const removeThumbnail = () => {  
        setBlog({ ...blog, imgUrl: { title: "", url: "" } })
    }

    return (
        <>
        { blog && 
        <div className="flex-1 border border-slate-400 p-[3%]">
            <div className="flex mb-4 flex-wrap">
                <div className="sm:w-[50%] w-full my-2">
                    <h1 className="font-semibold p-1">Category<sup className="text-red-500">*</sup></h1>
                    <input className="w-full mt-1 border border-gray-200 p-2 mb-5 focus:outline-fuchsia-200" value={blog && blog.category} onChange={(e) => handleCategory(e.target.value)}/>

                    <h1 className="font-semibold p-1">Title<sup className="text-red-500">*</sup></h1>
                    <input className="w-full mt-1 border border-gray-200 p-2 mb-5 focus:outline-fuchsia-200" value={blog && blog.title} onChange={(e) => handleTitle(e.target.value)}/>

                    <h1 className="font-semibold p-1">Tags</h1>
                    <p className={`w-full my-2 text-center flex flex-wrap p-1 border border-gray-200`}>
                        {
                        blog && blog.tags.map((tag, i) => {
                            return <span key={i} className={`flex items-center w-auto py-1 px-3 mr-2 rounded bg-fuchsia-500/[.1] text-fuchsia-600 text-sm`}>{tag} <FaTimesCircle className="ml-2" onClick={() => deleteTag(tag)} /></span>
                        })
                        }
                        <input className={`w-28 py-1 px-2 pb-2 mr-2 rounded text-sm border-none focus:outline-none flex-1`} ref={inputRef} placeholder="Add tags" onChange={(e) => handleTags(e)} />
                    </p>
                </div>
            
                <div className="flex-1 md:mx-4 mt-2">
                    <h1 className="font-semibold p-1">Post Thumbnail</h1>
                    <div className="bg-gray-100 rounded p-4 flex items-center my-2 justify-center text-center">
                        <div>
                            <img src={blog.imgUrl.url} alt={blog.imgUrl.title} className={`max-h-[200px]`} />
                            <p>{blog.imgUrl.title}</p>
                            <p>Drag and drop image here</p>
                            <label>
                                <p className="my-2">or <span className="text-fuchsia-600">Browse</span></p>
                                <input className="bg-gray-50 hidden" type="file" onChange={(e) => handleThumbnail(e.target.files[0])} />
                            </label>
                            {
                                blog.imgUrl.url !== "" ?
                                    <div className="flex my-2 gap-2 justify-center">
                                        <button className="p-2 px-3 rounded bg-red-600 text-white text-[10px]" onClick={() => removeThumbnail()}>Delete</button>
                                    </div>
                                : ""
                            }
                        </div>
                    </div>
                    <h1 className="font-semibold p-1">Post Summary</h1>
                    <textarea className="flex-1 border border-gray-200 w-full h-[100px] p-3 my-1 focus:outline-fuchsia-200" value={blog && blog.summary} onChange={(e) => handleSummary(e.target.value)}></textarea>
                </div>
            </div>

            
            <h1 className="font-semibold p-1 mt-14 mb-1">Post Body</h1>
            <Block blog={blog} setBlog={setBlog} />
        </div>
        }</>
    )
}

export default Box;
