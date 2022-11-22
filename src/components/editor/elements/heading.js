export const Heading = ({ styles }) => {
    return (
        <h1 className={`font-bold text-xl ${styles.join(" ")}`} contentEditable="true">
            heading
        </h1>
    )
}

export default Heading;
