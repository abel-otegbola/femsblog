import { useState } from "react"

const RightPane = () => {
    const [style, setStyle] = useState({
        display: "block",
        spacing: {
            margin: 10,
            padding: 10,
        },
        size: {
            width: "auto",
            height: "auto",
        }
    })

    const handleSelection = (element) => {
        setStyle({
            ...style,
            display: element
        })
    }

    const displays = ["block", "flex", "inline", "grid"]
    const spacing = ["margin", "padding"]
    const size = ["width", "height"]
    const typography = ["font", "weight", "size", "color", "align", "style"]
    const background = ["color", "image"]
    const border = ["size", "color", "style"]

    return (
        <div className="w-2/7 h-full p-4 bg-slate-800 text-white text-xs">
            <p className="p-3">Display</p>
            <div className="grid grid-cols-4 mb-3">
                {
                    displays.map((element, index) => {
                        return (
                            <p key={index} 
                                className={`px-2 py-1 border-white-500/50 m-1 text-center cursor-pointer rounded hover:bg-fuchsia-600 flex-1
                                ${(style.display === element)? "bg-fuchsia-600": "bg-slate-900"}`}
                                onClick={() => handleSelection(element)} 
                                id={element} 

                            >{element}</p>
                        )
                    })
                }
            </div>

            <p className="p-3">Spacing</p>
            <div className="grid grid-cols-2 mb-3">
                {
                    spacing.map((element, index) => {
                        return (
                            <div key={index} className="flex">
                                <p 
                                    className={`px-2 py-1 border-white-500/50 m-1 text-center rounded flex-1`}
                                    id={element} 

                                >{element}</p>
                                <input type="number" className="p-2 w-14 rounded border border-slate-400 bg-slate-600 outline-hidden" />
                            </div>
                        )
                    })
                }
            </div>

            <p className="p-3">Size</p>
            <div className="grid grid-cols-2 mb-3">
                {
                    size.map((element, index) => {
                        return (
                            <div key={index} className="flex">
                                <p 
                                    className={`px-2 py-1 border-white-500/50 m-1 text-center rounded flex-1`}
                                    id={element} 

                                >{element}</p>
                                <input 
                                    type={(element === "color") ? "color" : "number"} 
                                    className="p-2 w-12 rounded border border-slate-400 bg-slate-600 outline-hidden" />
                            </div>
                        )
                    })
                }
            </div>

            <p className="p-3">Typography</p>
            <div className="grid grid-cols-3 mb-3">
                {
                    typography.map((element, index) => {
                        return (
                            <div key={index} className="flex">
                                <p 
                                    className={`px-2 py-1 border-white-500/50 m-1 text-center rounded flex-1`}
                                    id={element} 

                                >{element}</p>
                                <input type="number" className="p-2 w-12 rounded border border-slate-400 bg-slate-600 outline-hidden" />
                            </div>
                        )
                    })
                }
            </div>
            
            <p className="p-3">Background</p>
            <div className="grid grid-cols-2 mb-3">
                {
                    background.map((element, index) => {
                        return (
                            <div key={index} className="flex">
                                <p 
                                    className={`px-2 py-1 border-white-500/50 m-1 text-center rounded flex-1`}
                                    id={element} 

                                >{element}</p>
                                <input type="number" className="p-2 w-12 rounded border border-slate-400 bg-slate-600 outline-hidden" />
                            </div>
                        )
                    })
                }
            </div>

            <p className="p-3">Border</p>
            <div className="grid grid-cols-3 mb-3">
                {
                    border.map((element, index) => {
                        return (
                            <div key={index} className="flex">
                                <p 
                                    className={`px-2 py-1 border-white-500/50 m-1 text-center rounded flex-1`}
                                    id={element} 

                                >{element}</p>
                                <input type="number" className="p-2 w-12 rounded border border-slate-400 bg-slate-600 outline-hidden" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RightPane;