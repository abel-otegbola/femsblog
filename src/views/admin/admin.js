import { useContext, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LeftPane from "../../components/editor/leftPane/leftPane";
import AuthContext from "../../context/authContext";
import { logOut } from "../../firebase/firebase";
import AllPost from "./pages/allPosts/allPost";
import Dashboard from "./pages/dashboard/dashboard";
import EditPost from "./pages/editPost/editPost";
import Media from "./pages/media/media";
import NewPost from "./pages/newPost/newPost";

const Admin = () => {
    const { user } = useContext(AuthContext);
    const handleLogout = async () => {
        await logOut()
    };

    useEffect(() => {
        console.log(user.email)
    })

    if (!user) {
        return <Navigate replace to="/login" />;
    }

    return (
        <div className="flex">
            <LeftPane logout={() => handleLogout()}/>
            <div className="flex-1 overflow-x-auto min-h-[300px]">
                <Routes>
                    <Route exact path="/" element={<Navigate replace to="/admin/dashboard" />} />
                    <Route exact path="/dashboard" element={<Dashboard />} />
                    <Route exact path="/new-post" element={<NewPost />} />
                    <Route exact path="/all-posts" element={<AllPost />} />
                    <Route exact path="/edit-post/:postId" element={<EditPost />} />
                    <Route exact path="/media" element={<Media />} />
                </Routes>
            </div>
        </div>
    )
}

export default Admin;