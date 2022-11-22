import { useState } from "react"

export const Link = ({ styles }) => {
    const [edit, setEdit] = useState(true)

    const handleEdit = (e) => {
        e.preventDefault()
        setEdit(!edit)
    }

    return (
        <a href="/" className={`${styles.join(" ")}`} contentEditable={edit} onClick={(e) => handleEdit(e)}>
            Link
        </a>
    )
}

export default Link