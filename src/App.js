import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Topbar from "./components/topbar/topbar";

//Components
import BlogsContextProvider from "./context/blogsContext";
import Chat from "./views/chat/chat";

//Views
import Home from "./views/home/home";
import Post from "./views/post/post";
import Editor from "./views/editor/editor";
import UserContextProvider from "./context/userContext";
import Categories from "./views/categories/categories";

function App() {
  return (
    <BlogsContextProvider>
    <UserContextProvider>
      <BrowserRouter>
      <Topbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/post/:slug" element={<Post />} />    
          <Route exact path="/categories/:category" element={<Categories />} />    
          <Route exact path="/categories" element={<Categories />} /> 
          <Route exact path="/editor" element={<Editor />} />
          <Route exact path="/chat/*" element={<Chat />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </UserContextProvider>
    </BlogsContextProvider>
  );
}



export default App;
