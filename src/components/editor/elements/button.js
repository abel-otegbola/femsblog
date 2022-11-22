export const Button = ({ styles }) => {
    return (
        <button className={`px-4 py-2 rounded bg-fuchsia-600 text-white ${styles.join(" ")}`} contentEditable="true">
            button
        </button>
    )
}

export default Button;