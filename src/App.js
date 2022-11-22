import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";

//Components
import BlogsContextProvider from "./context/blogsContext";
import Editor from "./views/editor/editor";

//Views
import Home from "./views/home/home";

function App() {
  return (
    <BlogsContextProvider>
      <BrowserRouter>

        <Routes>
          <Route exact path="/" element={<Home />} />    
          <Route exact path="/editor" element={<Editor />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </BlogsContextProvider>
  );
}



export default App;
