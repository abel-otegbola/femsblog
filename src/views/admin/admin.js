import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LeftPane from "../../components/editor/leftPane/leftPane";
import AuthContext from "../../context/authContext";
import { logOut } from "../../firebase/firebase";
import AllPost from "./pages/allPosts/allPost";
import Dashboard from "./pages/dashboard/dashboard";
import NewPost from "./pages/newPost/newPost";

const Admin = () => {
    const { user } = useContext(AuthContext);
    const handleLogout = async () => {
        await logOut()
    };

    if (!user) {
        return <Navigate replace to="/login" />;
    }

    return (
        <div className="flex">
            <LeftPane logout={() => handleLogout()}/>
            <div className="flex-1">
                <Routes>
                    <Route exact path="/" element={<Navigate replace to="/admin/dashboard" />} />
                    <Route exact path="/dashboard" element={<Dashboard />} />
                    <Route exact path="/new-post" element={<NewPost />} />
                    <Route exact path="/all-posts" element={<AllPost />} />
                </Routes>
            </div>
        </div>
    )
}

export default Admin;