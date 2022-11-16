import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";

//Components
import Topbar from "./components/topbar/topbar";
import BlogsContextProvider from "./context/blogsContext";

//Views
import Home from "./views/home/home";

function App() {
  return (
    <BlogsContextProvider>
      <BrowserRouter>
        <Topbar />

        <Routes>
          <Route exact path="/" element={<Home />}/>      
        </Routes>

        <Footer />
      </BrowserRouter>
    </BlogsContextProvider>
  );
}



export default App;
