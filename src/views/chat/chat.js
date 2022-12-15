import { Route, Routes } from "react-router-dom";
import Sidebar from "../../components/chat/sidebar";
import Dms from "./innerviews/dms";
import Threads from "./innerviews/threads";

const Chat = () => {
    return (
        <div className="flex">
            <Sidebar />
            <Routes>
                <Route exact path="/" element={<Threads />} />
                <Route exact path="/dms" element={<Dms />} />
            </Routes>
        </div>
    )
}

export default Chat;