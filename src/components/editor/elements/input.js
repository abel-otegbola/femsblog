export const Input = ({ styles }) => {
    return (
        <input type="text" className={`p-2 rounded border border-slate-200 focus:outline-4 focus:outline-blue-300 ${styles.join(" ")}`} placeholder="Input here" />
    )
}

export default Input;