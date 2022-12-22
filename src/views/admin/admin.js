import { Route, Routes } from "react-router-dom";
import LeftPane from "../../components/editor/leftPane/leftPane";
import AllPost from "./pages/allPosts/allPost";
import Dashboard from "./pages/dashboard/dashboard";
import NewPost from "./pages/newPost/newPost";

const Admin = () => {

    return (
        <div className="flex">
            <LeftPane />
            <div className="flex-1">
                <Routes>
                    <Route exact path="/dashboard" element={<Dashboard />} />
                    <Route exact path="/new-post" element={<NewPost />} />
                    <Route exact path="/all-posts" element={<AllPost />} />
                </Routes>
            </div>
        </div>
    )
}

export default Admin;