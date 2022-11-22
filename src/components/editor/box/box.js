import { useState } from "react"
import Button from "../elements/button"
import Heading from "../elements/heading"
import Image from "../elements/image"
import Input from "../elements/input"
import Link from "../elements/link"
import Span from "../elements/span"
import Text from "../elements/text"

const Box = () => {
    const [dragged, setDragged] = useState("border-blue-300")
    const [elements, setElements] = useState([])

    const handleDragOver = (e) => {
        e.preventDefault()
    }
    const handleDrop = (e) => {
        let newElement = e.dataTransfer.getData("Text")
        
        setElements([...elements, {
            name: newElement,
            styles: ["p-2"]
        }])

        setDragged("border-blue-300")
    }

    return (
        <div className={`flex-1 border ${dragged}`} 
            onDragOver={(e)=> { handleDragOver(e); setDragged("border-2 border-green-300") }}
            onTouchMove={(e)=> { handleDragOver(e); setDragged("border-2 border-green-300") }}
            onDrop={(e)=>handleDrop(e)}
        >
            {
                elements.map((element,index) => { 
                    return (
                        (element.name === "box") ? <Box styles={element.styles} key={index}/>
                        :
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
    )
}

export default Box;