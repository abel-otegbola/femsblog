import { Route, Routes } from "react-router-dom";
import LeftPane from "../../components/editor/leftPane/leftPane";
import NewPost from "../newPost/newPost";

const Admin = () => {

    return (
        <div className="flex">
            <LeftPane />
            <div className="flex-1">
                <Routes>
                    <Route exact path="/new-post" element={<NewPost />} />
                </Routes>
            </div>
        </div>
    )
}

export default Admin;