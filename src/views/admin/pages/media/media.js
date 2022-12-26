import Header from "../../../../components/editor/header/header";

const Media = () => {
    return (
        <div className="bg-gray-100">
            <Header text={"Media files"} />
            <div className="p-[3%]">
                <div className="h-[150px] bg-white rounded flex items-center justify-center text-center">
                    <div>
                        <p>Drag and Drop files here</p>
                        <label>
                            <p className="my-2">or <span className="text-fuchsia-600">BROWSE</span></p>
                            <input className="bg-gray-50 hidden" type="file" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Media;