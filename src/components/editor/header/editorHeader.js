
const EditorHeader = ({ handlePublish, status }) => {
    return (
        <div className="flex bg-fuchsia-600 text-white items-center px-[3%] py-1 justify-between">

            <ul className="flex items-center">
                <li className="px-5 py-2 hover:text-black hover:bg-white cursor-pointer">Content</li>
                <li className="px-5 py-2 hover:text-black hover:bg-white cursor-pointer">Meta</li>
                <li className="px-5 py-2 hover:text-black hover:bg-white cursor-pointer">SEO</li>

            </ul>


            <button className="bg-gray-600 text-white px-5 py-2 hover:bg-gray-800" onClick={() => handlePublish()}>{status}</button>
        </div>
    )
}

export default EditorHeader;