export const Span = ({ styles }) => {
    return (
        <span className={`${styles.join(" ")}`} contentEditable="true">
            span
        </span>
    )
}

export default Span;