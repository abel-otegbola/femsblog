import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Topbar from "./components/topbar/topbar";

//Components
import BlogsContextProvider from "./context/blogsContext";
import Chat from "./views/chat/chat";
import Editor from "./views/editor/editor";

//Views
import Home from "./views/home/home";

function App() {
  return (
    <BlogsContextProvider>
      <BrowserRouter>
      <Topbar />

        <Routes>
          <Route exact path="/" element={<Home />} />    
          <Route exact path="/editor" element={<Editor />} />
          <Route exact path="/chat/*" element={<Chat />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </BlogsContextProvider>
  );
}



export default App;
