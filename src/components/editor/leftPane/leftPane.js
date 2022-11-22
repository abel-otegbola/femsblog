const LeftPane = () => {
    const handleDrag = (e) => {
        e.dataTransfer.setData("Text", e.target.id)
    }
    const elements = ["box", "heading", "text", "span", "input", "link", "button", "image", "video"]

    return (
        <div className="w-2/7 p-4 bg-slate-800 text-white">
            <p className="p-3">Layouts</p>
            <div className="grid grid-cols-3 mb-3">
                <p className="px-3 py-2 border-white-500/50 bg-slate-900 m-1 text-center text-sm cursor-pointer rounded" id="single" draggable="true" onDragStart={(e) => handleDrag(e)} onTouchStart={(e) => handleDrag(e)}>single</p>
                <p className="px-3 py-2 border-white-500/50 bg-slate-900 m-1 text-center text-sm cursor-pointer rounded" id="double" draggable="true" onDragStart={(e) => handleDrag(e)} onTouchStart={(e) => handleDrag(e)}>double</p>
                <p className="px-3 py-2 border-white-500/50 bg-slate-900 m-1 text-center text-sm cursor-pointer rounded" id="grid" draggable="true" onDragStart={(e) => handleDrag(e)} onTouchStart={(e) => handleDrag(e)}>grid</p>
            </div>
            
            <p className="p-3">Elements</p>
            <div className="grid grid-cols-3 mb-3">
                {
                    elements.map((element, index) => {
                        return (
                            <p key={index} 
                                className="px-3 py-2 border-white-500/50 bg-slate-900 m-1 text-center text-sm cursor-pointer rounded hover:bg-fuchsia-600" 
                                id={element} 
                                draggable="true" 
                                onDragStart={(e) => handleDrag(e)} 
                                onTouchStart={(e) => handleDrag(e)}
                            >{element}</p>
                        )
                    })
                }
            </div>

            <p className="p-3">Components</p>
            
        </div>
    )
}

export default LeftPane;