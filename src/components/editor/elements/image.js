import { useState } from "react";
import { FaRegImage } from "react-icons/fa"

export const Image = ({ styles }) => {
    const [image, setImage] = useState("https://placeholder.com/150")

    const handleInput = (files) => {
        setImage(files[0].name)
    }

    return (
        <div className="w-40 h-24 bg-slate-200 flex justify-center items-center">
            <img src={image} alt="gallery" className={`${styles.join(" ")} ${(image !== "https://placeholder.com/150") ? "block" : "hidden"}`}/>
            <p className="text-xs flex flex-col items-center justify-center">
                <FaRegImage />
                Drop image here or
                <label htmlFor="img" className="text-fuchsia-600 cursor-pointer"> Browse</label>
            </p>
            <input type="file" id="img" onChange={(e) => handleInput(e.target.files)} className="hidden"/>
        </div>
    )
}

export default Image;