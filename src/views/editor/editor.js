import Box from "../../components/editor/box/box";
import EditorHeader from "../../components/editor/header/header";
import LeftPane from "../../components/editor/leftPane/leftPane";
import RightPane from "../../components/editor/rightPane/rightPane";

const Editor = () => {
    return (
        <div className="">
            <EditorHeader />

            <div className="flex items-stretch">
                <LeftPane />
                <Box />
                <RightPane />
            </div>
        </div>
    )
}

export default Editor;