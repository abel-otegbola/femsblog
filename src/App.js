import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Topbar from "./components/topbar/topbar";

//Components
import BlogsContextProvider from "./context/blogsContext";
import Chat from "./views/chat/chat";

//Views
import Home from "./views/home/home";
import Post from "./views/post/post";
import Categories from "./views/categories/categories";
import Tags from "./views/tags/tags";
import Admin from "./views/admin/admin";
import CommentsContextProvider from "./context/commentsContext";
import Login from "./views/login/login";
import Signup from "./views/signup/signup";
import { AuthProvider } from "./customHooks/useAuth";
import Bookmarks from "./views/bookmarks/bookmarks";
import ReadersContextProvider from "./context/readersContext";

function App() {
  

  return (
    <BlogsContextProvider>
    <CommentsContextProvider>
    <ReadersContextProvider>
      <AuthProvider>
        <BrowserRouter>
        <Topbar />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/post/:slug" element={<Post />} />    
            <Route exact path="/categories/:category" element={<Categories />} />    
            <Route exact path="/categories" element={<Categories />} /> 
            <Route exact path="/tags/:tag" element={<Tags />} /> 
            <Route exact path="/bookmarks" element={<Bookmarks />} /> 
            <Route exact path="/admin/*" element={<Admin />} />
            <Route exact path="/chat/*" element={<Chat />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </ReadersContextProvider>
    </CommentsContextProvider>
    </BlogsContextProvider>
  );
}



export default App;
