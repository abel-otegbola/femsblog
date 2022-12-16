import Box from "../../components/editor/box/box";
import EditorHeader from "../../components/editor/header/header";
import LeftPane from "../../components/editor/leftPane/leftPane";

const Editor = () => {
    return (
        <div className="">
            <EditorHeader />

            <div className="flex items-stretch">
                <LeftPane />
                <Box />
            </div>
        </div>
    )
}

export default Editor;