export const Text = ({ styles }) => {
    return (
        <p className={`${styles.join(" ")}`} contentEditable={true}>
            text
        </p>
    )
}

export default Text