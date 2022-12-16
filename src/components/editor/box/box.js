import { useState } from "react"
import { FaTimesCircle } from "react-icons/fa"
import { formatDate } from "../../../utils/helpers/formatDate"
import Button from "../elements/button"
import Heading from "../elements/heading"
import Image from "../elements/image"
import Input from "../elements/input"
import Link from "../elements/link"
import Span from "../elements/span"
import Text from "../elements/text"

const Box = () => {
    const [dragged, setDragged] = useState("border-blue-300")
    const [elements, setElements] = useState([]);
    const [blog, setBlog] = useState({
        id: 5,
        author_id: 1,
        title: "Input post title here",
        category: "Input post category",
        tags: [],
        summary: "Type in the post summary here",
        slug: "",
        createdAt: "",
        updatedAt: "",
        content: []
    })

    const handleDragOver = (e) => {
        e.preventDefault()
    }

    const handleDrop = (e) => {
        let newElement = e.dataTransfer.getData("Text")
        
        setElements([...elements, {
            name: newElement,
            styles: ["p-2"]
        }])

        setBlog({ ...blog, content: blog.content.push([newElement]) })

        console.log(blog)

        setDragged("border-blue-300")
    }

    const handleTags = (e) => {
        if(e.key === "Enter") {
            setBlog({ ...blog, tags: [...blog.tags, e.target.value] })
        }
    }

    return (
        <div className="flex-1">
            
            <input className="w-full border-none text-center uppercase text-[10px] mb-3 mt-[30px] focus:outline-gray-100" placeholder={blog.category}/>
            <input className="w-full border-none text-center font-bold text-2xl focus:outline-gray-100" placeholder={blog.title}/>
            <p className="text-fuchsia-500 py-2 text-center">
                {
                    formatDate(blog.createdAt || "2022-10-10 5:02").map((item, i) => { return (
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

            <div className={`w-full min-h-[300px] border ${dragged}`} 
                onDragOver={(e)=> { handleDragOver(e); setDragged("border-2 border-green-300") }}
                onTouchMove={(e)=> { handleDragOver(e); setDragged("border-2 border-green-300") }}
                onDrop={(e)=>handleDrop(e)}
            >
                {
                    elements.map((element,index) => { 
                        return (
                            (element.name === "heading") ? <Heading styles={element.styles} key={index}/>
                            : 
                            (element.name === "text") ? <Text styles={element.styles} key={index}/>
                            :
                            (element.name === "link") ? <Link styles={element.styles} key={index}/>
                            :
                            (element.name === "button") ? <Button styles={element.styles} key={index}/>
                            :
                            (element.name === "span") ? <Span styles={element.styles} key={index}/>
                            :
                            (element.name === "input") ? <Input styles={element.styles} key={index}/>
                            :
                            (element.name === "image") ? <Image styles={element.styles} key={index}/>
                            :
                            ""
                        ) 
                    })
                }

            </div>
        </div>
    )
}

export default Box;